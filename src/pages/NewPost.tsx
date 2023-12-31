import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import Modal from '@mui/material/Modal';
import { Box, Button, Divider, IconButton, TextField, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './styles.css';
import { Navigation } from 'swiper/modules';
import { useSelector } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import environment from '../configration/environment';
import { API_URLS, localStorageKeys } from '../utils/constants';
import { show_Notification } from '../store/actions/userActions';
import { showErrorMessage, showSuccessMessage } from '../utils/HelperFunction';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    // p: 4,
    borderRadius: "10px",
    maxHeight: "898px",
    maxWidth: "64vh",
    minHeight: "391px",
    minWidth: "348px",
    width: "461px",
    height: "64vh",
    outline: 0
};

interface newPost {
    files: Array<Blob>,
    caption: string
}

type headerType = "Create Post" | "Adjust";
export default function NewPost({ open, setOpen }: { open?: boolean, setOpen?: any }) {
    const dispatch = useDispatch();
    const [headerTitle, setHeaderTitle] = useState<headerType>("Create Post");
    const userState = useSelector((state: any) => state?.user);
    const handleClose = () => setOpen(false);
    const [displayImage, setDisplayImage] = useState<Array<string>>([]);
    const [activeScreen, setActiveScreen] = useState<number>(1);
    const [postBody, setPostBody] = useState<newPost>({
        files: [],
        caption: ""
    })

    async function handleFileSelect(e: any) {
        let htmlImageDisplay: Array<string> = [];
        let fileArray = e.target.files;
        for (let i = 0; i < fileArray.length; i++) {
            let convertedBase64: any = await convertToBase64(e.target.files[i])
            if (convertedBase64) {
                htmlImageDisplay.push(convertedBase64);
            }
        }

        if (htmlImageDisplay.length > 0) {
            setPostBody({ ...postBody, files: fileArray })
            setDisplayImage(htmlImageDisplay);
            setActiveScreen(2)
            setHeaderTitle("Adjust")
        }
    }

    const handleSubmit = async () => {
        try {
            let id = userState?._id;
            let formData = new FormData();

            formData.append("caption", postBody.caption);
            formData.append("userid", id)

            if (postBody?.files?.length > 0) {
                for (let i = 0; i < postBody.files.length; i++) {
                    formData.append('img', postBody.files[i])
                }
            }

            const postBaseURL = environment.baseURL + "/post";
            let url = postBaseURL + API_URLS.newPost;

            const token = localStorage.getItem(localStorageKeys.mediaHub_AccessToken);
            let response = await fetch(url, {
                method: "POST",
                body: formData,
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            let result = await response.json();
            if (result.success) {
                // dispatch(show_Notification("Post Uploaded"));
                showSuccessMessage("Post Uploaded")
                handleClose();
            }
            else {
                // dispatch(show_Notification(result?.message));
                showErrorMessage(result?.message)
            }
            console.log('---result', result);
        } catch (err) {
            console.log('err in next', err);
        }
    }

    return (
        <div>
            <Modal
                open={open as boolean}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <IconButton
                            sx={{ visibility: activeScreen === 1 ? "hidden" : "visible" }}
                            onClick={() => {
                                setActiveScreen(1);
                                setHeaderTitle("Create Post")
                            }}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                        <Typography variant='h6' align='center'>{headerTitle}</Typography>
                        <Button
                            sx={{
                                visibility: (activeScreen === 1 || activeScreen === 3) ? "hidden" : "visible"
                            }}
                            onClick={() => {
                                setHeaderTitle("Create Post");
                                setActiveScreen(3)
                            }}>
                            Share
                        </Button>
                    </Box>
                    <Divider sx={{ backgroundColor: "black" }} />
                    <Box>
                        {
                            activeScreen === 1 &&
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                                <Button
                                    variant="contained"
                                    component="label"
                                >
                                    Upload File
                                    <input
                                        type="file"
                                        accept="image/png, image/gif, image/jpeg"
                                        multiple
                                        hidden
                                        onChange={handleFileSelect}
                                    />
                                </Button>
                            </Box>
                        }
                        <Box>
                            {
                                activeScreen === 2 && <>
                                    {
                                        (displayImage?.length > 0 && displayImage) && <div>
                                            {DisplayDomImage(displayImage, postBody.files)}
                                            <br />
                                        </div>
                                    }
                                </>
                            }
                        </Box>
                    </Box>
                    {
                        activeScreen === 3 &&
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                // width: "100%"
                                gap: 2,
                                marginTop: 2
                            }}>
                            <TextField
                                variant='outlined'
                                placeholder='caption'
                                onChange={(e: any) => {
                                    setPostBody({ ...postBody, caption: e.target.value })
                                }}
                            />
                            <Button
                                onClick={handleSubmit}
                                variant='contained'
                            >Submit</Button>
                        </Box>
                    }
                </Box>
            </Modal>
        </div >
    );
}

function DisplayDomImage(images: Array<String>, originalFile: any) {
    console.log("images--->", images,)
    return <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {images?.map((singleImages: any, i: any) => {
            return <SwiperSlide key={`SliderImage - ${originalFile[i]["name"]}`}>
                <img
                    title={originalFile[i]["name"]}
                    alt={originalFile[i]["name"]}
                    src={singleImages}
                />
            </SwiperSlide>
        })}
    </Swiper>
}

const convertToBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};

// import { Box, TextField, Typography } from '@mui/material';
// import { useState } from 'react'
// import { useSelector } from 'react-redux';
// // import { newPostURL } from '../services/Links';

// function NewPost() {
//     const userState = useSelector((state: any) => state?.providerReducer?.user);
//     const [img, setimg] = useState([]);
//     const [imgsend, setImgSend] = useState()
//     const arr: any = [];

//     async function handleFileSelect(e: any) {
//         let fileArray = e.target.files;
//         for (let i = 0; i < fileArray.length; i++) {
//             arr.push(await convertToBase64(e.target.files[i]))
//         }
//         setimg(arr);
//         setImgSend(e.target.files[0]);
//     }

//     const addPost = async () => {
//         let id = userState._id;
//         let data: any = new FormData();

//         data.append("img", imgsend);
//         try {
//             const url = `dddddddd?userid=${id}`
//             fetch(url, {
//                 method: "POST",
//                 body: data
//             }).then((response: any) => response.text().then((result: any) => { console.log("result") }))
//             //let _result = await response.text();
//         }
//         catch (err) { console.log("Upload Fails", err) }

//     }
//     return (
//         <Box>
//             <Typography variant='h2'>No selected Files</Typography>
//             <TextField variant='filled' type={'file'} onChange={handleFileSelect} />
//             <br />
//             {
//                 img.map((item, i) => {
//                     return <div key={i}>
//                         <img style={{ height: '200px', width: '200px' }} title={`${i}`} alt={`${i}`} src={item} />
//                     </div>
//                 })
//             }
//             <br />
//             <button onClick={() => addPost()}>Add Post</button>
//         </Box>
//     )
// }
// export default NewPost;

// const convertToBase64 = (file: any) => {
//     return new Promise((resolve, reject) => {
//         const fileReader = new FileReader();
//         fileReader.readAsDataURL(file);
//         fileReader.onload = () => {
//             resolve(fileReader.result);
//         };
//         fileReader.onerror = (error) => {
//             reject(error);
//         };
//     });
// };








// <Box sx={style}>
//     <Box>
//         {
//             activeScreen == 1 &&
//             <TextField
//                 variant='filled'
//                 type={'file'}
//                 onChange={handleFileSelect}
//                 inputProps={{ multiple: true }}
//                 onClick={(e: any) => e.target.value = null}
//             />
//         }
//     </Box>
//     <Box>
//         {
//             activeScreen == 2 && <>
//                 {
//                     (displayImage?.length > 0 && displayImage) && <div>
//                         {DisplayDomImage(displayImage)}
//                         <br />
//                     </div>
//                 }
//             </>
//         }
//     </Box>
//     <div>

//     </div>
//     <br />
//     <div>
//         {activeScreen == 2 &&
//             <>
//                 <Box>
//                     <img alt='img' src={displayImage[0]} width='20%' />
//                 </Box>
//                 <TextField
//                     variant='outlined'
//                     placeholder='caption'
//                     value={postBody?.caption}
//                     onChange={(e: any) => { setPostBody({ ...postBody, caption: e.target.value }) }} />
//                 <Button variant='contained' onClick={displaySelectedFiles}>Submit</Button>
//             </>
//         }

//     </div>
// </Box>