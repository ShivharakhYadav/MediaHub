import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 1 }}>
                    <Box>{children}</Box>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function SingleUserProfile() {
    const [value, setValue] = React.useState(0);

    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isXl = useMediaQuery(theme.breakpoints.up('xl'));
    const isSM = useMediaQuery(theme.breakpoints.up('sm'));
    let cols = 3; // Default value for small screens

    if (isMd) {
        cols = 4; // Change cols to 4 on medium screens (md)
    } else if (isXl) {
        cols = 7; // Change cols to 5 on extra-large screens (xl)
    }
    else if (isSM) {
        cols = 2
    }
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const arr = [
        "http://localhost:4000/uploads/637661a7454b5127be5baeb4-1702218698585-1920-x-1080-HD-Wallpapers-51.jpg",
        "http://localhost:4000/uploads/637661a7454b5127be5baeb4-1702218698585-1920-x-1080-HD-Wallpapers-51.jpg",
        "http://localhost:4000/uploads/637661a7454b5127be5baeb4-1702218698585-1920-x-1080-HD-Wallpapers-51.jpg",
        "http://localhost:4000/uploads/637661a7454b5127be5baeb4-1702218698585-1920-x-1080-HD-Wallpapers-51.jpg",
        "http://localhost:4000/uploads/637661a7454b5127be5baeb4-1702218698585-1920-x-1080-HD-Wallpapers-51.jpg",
        "http://localhost:4000/uploads/637661a7454b5127be5baeb4-1702218698585-1920-x-1080-HD-Wallpapers-51.jpg",
    ];

    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            img2: "http://localhost:4000/uploads/637661a7454b5127be5baeb4-1702218698585-1920-x-1080-HD-Wallpapers-51.jpg",
            title: 'Breakfast',
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            img2: "http://localhost:4000/uploads/637661a7454b5127be5baeb4-1702218698585-1920-x-1080-HD-Wallpapers-51.jpg",
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            img2: "http://localhost:4000/uploads/637661a7454b5127be5baeb4-1702218698585-1920-x-1080-HD-Wallpapers-51.jpg",
            title: 'Camera',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            img2: "http://localhost:4000/uploads/637661a7454b5127be5baeb4-1702218698585-1920-x-1080-HD-Wallpapers-51.jpg",
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            img2: "http://localhost:4000/uploads/637661a7454b5127be5baeb4-1702218698585-1920-x-1080-HD-Wallpapers-51.jpg",
            title: 'Hats',
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            img2: "http://localhost:4000/uploads/637661a7454b5127be5baeb4-1702218698585-1920-x-1080-HD-Wallpapers-51.jpg",
            title: 'Honey',
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            img2: "http://localhost:4000/uploads/637661a7454b5127be5baeb4-1702218698585-1920-x-1080-HD-Wallpapers-51.jpg",
            title: 'Basketball',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            img2: "http://localhost:4000/uploads/637661a7454b5127be5baeb4-1702218698585-1920-x-1080-HD-Wallpapers-51.jpg",
            title: 'Fern',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            img2: "http://localhost:4000/uploads/637661a7454b5127be5baeb4-1702218698585-1920-x-1080-HD-Wallpapers-51.jpg",
            title: 'Mushrooms',
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            img2: "http://localhost:4000/uploads/637661a7454b5127be5baeb4-1702218698585-1920-x-1080-HD-Wallpapers-51.jpg",
            title: 'Tomato basil',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            img2: "http://localhost:4000/uploads/637661a7454b5127be5baeb4-1702218698585-1920-x-1080-HD-Wallpapers-51.jpg",
            title: 'Sea star',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            img2: "http://localhost:4000/uploads/637661a7454b5127be5baeb4-1702218698585-1920-x-1080-HD-Wallpapers-51.jpg",
            title: 'Bike',
        },
    ];

    return (
        <Container>
            <Box>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered >
                        <Tab label="Posts" {...a11yProps(0)} />
                        <Tab label="Reels" {...a11yProps(1)} />
                        {/* <Tab label="Tagged" {...a11yProps(2)} /> */}
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <ImageList cols={cols}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img2}>
                                <img
                                    // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    src={item.img2}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{ height: "300px" }}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    {/* <ImageList cols={cols}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    src={item.img}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{ height: "300px" }}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList> */}
                </CustomTabPanel>
                {/* <CustomTabPanel value={value} index={2}>
                    Item Three
                </CustomTabPanel> */}
            </Box>
        </Container>
    );
}












// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';
// import Container from '@mui/material/Container'
// import { Avatar, Grid, Tab, Tabs, ImageList, ImageListItem } from '@mui/material'
// import { useEffect, useState } from 'react';
// import { useNavigate, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';
// import { makeStyles } from '@mui/styles';
// import MoreIcon from '@mui/icons-material/MoreVert';
// import ImageIcon from '@mui/icons-material/Image';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
// import { styled } from '@mui/material/styles';
// // import { setToLocalStorage } from '../utilities/LocalStorageHandler';
// // import localStorageKeys from '../utilities/LocalStorageKeys';
// // import providerActions from '../store/actions/provider/actions';
// // import { getRequest } from '../services/Services';
// // import { singleRecordURL } from '../services/Links';

// function TabPanel(props: any) {
//     const { children, value, index, ...other } = props;
//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 1 }}>
//                     <Box>{children}</Box>
//                 </Box>
//             )}
//         </div>
//     );
// }

// function a11yProps(index: any) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// }

// const useStyles = makeStyles({
//     profileContainer: {
//         width: "150px",
//         height: "150px",
//     },
//     avatar: {
//         height: "100% !important",
//         width: "100% !important",
//     },
//     indicatorStyle: {
//         // marginLeft: "-102px !important",
//         // '& .MuiTabs-flexContainer': {
//         //     '& >*':
//         //     {
//         //         justifyContent: "unset !important",
//         //         padding: "0px !important",
//         //     }
//         // },
//         // '& .MuiTabs-indicator': {
//         //     width: "80px !important",
//         //     // left: "392.962px !important"
//         // },
//     },
//     tabs: {

//     }
// })

// const Typography = styled('h3')(({ theme }) => ({
//     [theme.breakpoints.up('xs')]: {
//         fontSize: "25px",
//         background: "red",
//         letterSpacing: "1.5px"
//     },
//     [theme.breakpoints.up('lg')]: {
//         fontSize: "27px",
//         background: "red",
//         letterSpacing: "2px"
//     },
// })
// );

// function SingleUserProfile(props: any) {
//     let classes = useStyles();
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const [searchedUserDetails, setSingleUserDetails] = useState<any>();
//     let { username } = useParams();
//     const [value, setValue] = useState(0);
//     const userDetails = useSelector((state: any) => state?.providerReducer?.user);
//     const handleChange = (event: React.SyntheticEvent, newValue: number) => { setValue(newValue); };
//     const [followStateMessage, setFollowStateMessage] = useState("Follow");
//     // useEffect(() => {
//     //     console.log(window.location)
//     //     console.log('----usrname----', username);
//     //     (async function () {
//     //         console.log('-------functioncalled')
//     //         let { data, success } = await getRequest(`${singleRecordURL}${username}`)
//     //         if (success) {
//     //             setSingleUserDetails(data);
//     //             let available = data.pendingRequests.filter((item: any) => item._id === userDetails._id);

//     //             console.log("Requested Status", available)
//     //             if (available.length > 0) {
//     //                 setFollowStateMessage("Requested")
//     //             }
//     //             else {
//     //                 let checkInFollowers = data.followers.filter((ids: any) => ids === userDetails._id);
//     //                 console.log("Unfollow Status", checkInFollowers,);
//     //                 if (checkInFollowers.length > 0) {
//     //                     setFollowStateMessage("Unfollow");
//     //                 }
//     //                 else {
//     //                     let fol = data.followings.filter((ids: any) => ids === userDetails._id);
//     //                     console.log("Follow Back Status", fol);
//     //                     if (fol.length > 0) {
//     //                         setFollowStateMessage("Follow Back")
//     //                     }
//     //                     else {
//     //                         setFollowStateMessage("Follow");
//     //                     }
//     //                 }
//     //             }
//     //         }
//     //         else {
//     //             setSingleUserDetails("");
//     //             navigate(`/${username}`)
//     //         }
//     //     })();
//     //     //eslint-disable-next-line
//     // }, [username, userDetails])

//     const requestedToFollow = (e: any) => {
//         const title = e.target.title;
//         if (title === "Follow" || title === "Follow Back") {
//             try {
//                 let requester = userDetails;
//                 let accepter = searchedUserDetails;
//                 let body = {
//                     requester: requester,
//                     accepter: accepter,
//                     type: 'RequestedToFollow'
//                 }
//                 fetch('http://localhost:4100/account/requestedToFollow', {
//                     method: "POST",
//                     headers: {
//                         "Accept": "application/json",
//                         "Content-Type": "application/json"
//                     },
//                     body: JSON.stringify(body)
//                 }).then((response) => {
//                     response.json().then((result) => {
//                         if (result.success) {
//                             setFollowStateMessage("Requested")
//                         }
//                         //searchedUserDetails.pendingRequests.push(userDetails);
//                     })
//                 })
//             }
//             catch (err) {
//                 console.log("Err", err);
//             }
//         }

//         if (title === "Unfollow") {
//         }

//     }

//     const handleConfirmFolllowRequest = async () => {
//         let available = userDetails?.pendingRequests?.filter((item: any) => item.username === username);
//         let body = {
//             acceptedId: userDetails._id,
//             requestedId: searchedUserDetails._id,
//             pendingRequestId: available[0]._id,
//             notificationBody: {
//                 _id: userDetails._id,
//                 username: userDetails.username,
//             }
//         }

//         let response = await fetch('http://localhost:4100/account/requestAccept', {
//             method: "POST", headers: {
//                 "Content-Type": "application/json",
//                 "accept": "*"
//             },
//             body: JSON.stringify(body)
//         });
//         let result: any = await response.json();
//         if (result.success) {
//             setFollowStateMessage("FollowBack");
//             // let url = `${singleRecordURL}${userDetails.username}`;
//             // getRequest(url).then((result: any) => {
//             //     setToLocalStorage(localStorageKeys.USER_DETAILS, result.data);
//             //     dispatch(providerActions.save_user(result.data));
//             // })
//         }
//     }

//     return (
//         <>
//             {
//                 searchedUserDetails ? <Container sx={{ background: "red" }} >
//                     <Grid container bgcolor={"aqua"} >
//                         {
//                             userDetails?.pendingRequests?.length > 0 && userDetails?.pendingRequests?.
//                                 filter((item: any) => item.username === username)
//                                 .map((it: any, i: any) => {
//                                     return <Grid item key={`${it.username}${i}00`} xl={5} md={12} sm={12} bgcolor={"gainsboro"} m="auto">
//                                         <Box key={`${it.usernama}${i}00`} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
//                                             <Box>
//                                                 <Typography>
//                                                     {username} wants to follow you
//                                                 </Typography>
//                                             </Box>
//                                             <Box sx={{ backgroundColor: "goldenrod", display: "flex", justifyContent: "space-around", width: "70%" }}>
//                                                 <Button variant='contained' onClick={handleConfirmFolllowRequest}>Confirm</Button>
//                                                 <Button variant='contained'>Delete</Button>
//                                             </Box>
//                                         </Box>
//                                     </Grid>
//                                 })
//                         }
//                         <Grid item xl={12} md={12} sm={12} xs={12} bgcolor={"gray"} >
//                             <Grid container bgcolor={"teal"}
//                                 justifyContent="center"
//                             >
//                                 <Grid item xl={3} sm={3} xs={3} bgcolor={"sandybrown"}
//                                     display="flex" justifyContent={"center"} alignItems="center"
//                                 >
//                                     <Box bgcolor={"pink"} className={classes.profileContainer}>
//                                         {
//                                             searchedUserDetails.profileimg ?
//                                                 <Avatar className={classes.avatar} title={searchedUserDetails.username} alt={searchedUserDetails.username} src={searchedUserDetails.profileimg} />
//                                                 :
//                                                 <Avatar className={classes.avatar} title={searchedUserDetails.username} alt={searchedUserDetails.username}>{searchedUserDetails.username}</Avatar>
//                                         }
//                                     </Box>
//                                 </Grid>
//                                 <Grid item xl={6} lg={6} md={8} sm={9} xs={9} bgcolor={"greenyellow"}>
//                                     <Box sx={{ height: "50px !important", background: "brown", display: "flex", alignItems: "center", justifyContent: "space-between" }} >
//                                         <Box>
//                                             <Typography >{searchedUserDetails?.username}</Typography>
//                                         </Box>
//                                         <Box>
//                                             <Button variant='contained' sx={{ width: "100px", height: "35px" }} title={followStateMessage} onClick={requestedToFollow} disabled={followStateMessage === "Requested" ? true : false}>
//                                                 {followStateMessage}
//                                             </Button>
//                                         </Box>
//                                         <Box bgcolor={"red"}>
//                                             <MoreIcon sx={{ transform: "rotate(90deg)" }} />
//                                         </Box>
//                                     </Box>
//                                     <Box bgcolor={'green'} display={'flex'} justifyContent="space-between">

//                                         <Button variant='contained'>{searchedUserDetails?.post?.length > 0 ? searchedUserDetails?.post.length : 0} Posts</Button>
//                                         <Button variant='contained'>{searchedUserDetails?.followers?.length ? searchedUserDetails?.followers?.length : 0} Followers</Button>
//                                         <Button variant='contained'>{searchedUserDetails?.followings?.length ? searchedUserDetails?.followings?.length : 0} Followings</Button>
//                                     </Box>
//                                     <Box>
//                                         <Typography >{searchedUserDetails?.name}</Typography>
//                                     </Box>
//                                     <Box>
//                                         <Typography>{searchedUserDetails?.bio}</Typography>
//                                     </Box>
//                                 </Grid>
//                             </Grid>
//                         </Grid>
//                         <Divider />
//                         <Grid item xl={12}>
//                             <Box sx={{ width: '100%' }}>
//                                 <Box sx={{ borderBottom: 1, borderColor: 'divider', overflow: "hidden" }}>
//                                     <Tabs value={value} onChange={handleChange}
//                                         className={classes.indicatorStyle}
//                                         centered aria-label="basic tabs example">
//                                         <Tab label="Posts" {...a11yProps(0)} icon={<ImageIcon sx={{}} />} iconPosition={"start"} />
//                                         <Tab label="Saved" {...a11yProps(1)} icon={<BookmarkBorderIcon sx={{ marginRight: "2px !important" }} />} iconPosition="start" />
//                                         <Tab label="Tagged" {...a11yProps(2)} icon={<AccountBoxOutlinedIcon sx={{ marginRight: "2px !important" }} />} iconPosition="start" />
//                                     </Tabs>
//                                 </Box>
//                                 <TabPanel value={value} index={0}>
//                                     <Box>
//                                         {
//                                             searchedUserDetails?.post?.length > 0 ? <Grid rowGap={2} columnSpacing={1} sx={{ background: "tomato" }} container xl={12} >
//                                                 {
//                                                     searchedUserDetails.post.map((post: any, i: any) => {
//                                                         return <Grid item xs={12} sm={6} md={4} xl={4} key={`${i + 1}`}>
//                                                             <img
//                                                                 className="gridImage"
//                                                                 alt={post.postLink.split("-")[3]} src={post.postLink} />
//                                                         </Grid>
//                                                     })
//                                                 }
//                                             </Grid> : <h1>No Post Availble</h1>
//                                         }
//                                     </Box>
//                                 </TabPanel>
//                                 <TabPanel value={value} index={1}>
//                                     <Box>
//                                         <ImageList cols={3} >
//                                             {
//                                                 searchedUserDetails?.saved?.length > 0 ?
//                                                     searchedUserDetails.saved.map((post: any, i: any) => {
//                                                         return <ImageListItem key={`${i + 1}`}>
//                                                             <img
//                                                                 style={{ height: "270px", }}
//                                                                 alt={post.postLink.split("-")[3]} src={post.postLink} />
//                                                         </ImageListItem>
//                                                     })
//                                                     : <h1>No Saved Post Availble</h1>
//                                             }
//                                         </ImageList>
//                                     </Box>
//                                 </TabPanel>
//                                 <TabPanel value={value} index={2}>
//                                     <Box>
//                                         <ImageList cols={3} >
//                                             {
//                                                 searchedUserDetails?.tagged?.length > 0 ?
//                                                     searchedUserDetails.tagged.map((post: any, i: any) => {
//                                                         return <ImageListItem key={`${i + 1}`}>
//                                                             <img
//                                                                 style={{ height: "270px", }}
//                                                                 alt={post.postLink.split("-")[3]} src={post.postLink} />
//                                                         </ImageListItem>
//                                                     })
//                                                     : <h1>No Tagged Post Availble</h1>
//                                             }
//                                         </ImageList>
//                                     </Box>
//                                 </TabPanel>
//                             </Box>
//                         </Grid>
//                     </Grid>
//                     <>
//                         {console.log('----serched user', searchedUserDetails?.username)}
//                     </>
//                 </Container> : <h1>User Not Found</h1>
//             }
//         </>
//     )
// }
// export default SingleUserProfile;


// {/* <>
//     {
//         searchedUserDetails ? <Container sx={{ background: "red" }} >
//             <Grid container bgcolor={"aqua"} >
//                 {
//                     userDetails?.pendingRequests?.length > 0 && userDetails?.pendingRequests?.
//                         filter((item: any) => item.username === username)
//                         .map((it: any, i: any) => {
//                             return <Grid item key={`${it.username}${i}00`} xl={5} md={12} sm={12} bgcolor={"gainsboro"} m="auto">
//                                 <Box key={`${it.usernama}${i}00`} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
//                                     <Box>
//                                         <Typography>
//                                             {username} wants to follow you
//                                         </Typography>
//                                     </Box>
//                                     <Box sx={{ backgroundColor: "goldenrod", display: "flex", justifyContent: "space-around", width: "70%" }}>
//                                         <Button variant='contained' onClick={handleConfirmFolllowRequest}>Confirm</Button>
//                                         <Button variant='contained'>Delete</Button>
//                                     </Box>
//                                 </Box>
//                             </Grid>
//                         })
//                 }
//                 <Grid item xl={12} md={12} sm={12} xs={12} bgcolor={"gray"} >
//                     <Grid container bgcolor={"teal"}
//                         justifyContent="center"
//                     >
//                         <Grid item xl={3} sm={3} xs={3} bgcolor={"sandybrown"}
//                             display="flex" justifyContent={"center"} alignItems="center"
//                         >
//                             <Box bgcolor={"pink"} className={classes.profileContainer}>
//                                 {
//                                     searchedUserDetails.profileimg ?
//                                         <Avatar className={classes.avatar} title={searchedUserDetails.username} alt={searchedUserDetails.username} src={searchedUserDetails.profileimg} />
//                                         :
//                                         <Avatar className={classes.avatar} title={searchedUserDetails.username} alt={searchedUserDetails.username}>{searchedUserDetails.username}</Avatar>
//                                 }
//                             </Box>
//                         </Grid>
//                         <Grid item xl={6} lg={6} md={8} sm={9} xs={9} bgcolor={"greenyellow"}>
//                             <Box sx={{ height: "50px !important", background: "brown", display: "flex", alignItems: "center", justifyContent: "space-between" }} >
//                                 <Box>
//                                     <Typography >{searchedUserDetails?.username}</Typography>
//                                 </Box>
//                                 <Box>
//                                     <Button variant='contained' sx={{ width: "100px", height: "35px" }} title={followStateMessage} onClick={requestedToFollow} disabled={followStateMessage === "Requested" ? true : false}>
//                                         {followStateMessage}
//                                     </Button>
//                                 </Box>
//                                 <Box bgcolor={"red"}>
//                                     <MoreIcon sx={{ transform: "rotate(90deg)" }} />
//                                 </Box>
//                             </Box>
//                             <Box bgcolor={'green'} display={'flex'} justifyContent="space-between">

//                                 <Button variant='contained'>{searchedUserDetails?.post?.length > 0 ? searchedUserDetails?.post.length : 0} Posts</Button>
//                                 <Button variant='contained'>{searchedUserDetails?.followers?.length ? searchedUserDetails?.followers?.length : 0} Followers</Button>
//                                 <Button variant='contained'>{searchedUserDetails?.followings?.length ? searchedUserDetails?.followings?.length : 0} Followings</Button>
//                             </Box>
//                             <Box>
//                                 <Typography >{searchedUserDetails?.name}</Typography>
//                             </Box>
//                             <Box>
//                                 <Typography>{searchedUserDetails?.bio}</Typography>
//                             </Box>
//                         </Grid>
//                     </Grid>
//                 </Grid>
//                 <Divider />
//                 <Grid item xl={12}>
//                     <Box sx={{ width: '100%' }}>
//                         <Box sx={{ borderBottom: 1, borderColor: 'divider', overflow: "hidden" }}>
//                             <Tabs value={value} onChange={handleChange}
//                                 className={classes.indicatorStyle}
//                                 centered aria-label="basic tabs example">
//                                 <Tab label="Posts" {...a11yProps(0)} icon={<ImageIcon sx={{}} />} iconPosition={"start"} />
//                                 <Tab label="Saved" {...a11yProps(1)} icon={<BookmarkBorderIcon sx={{ marginRight: "2px !important" }} />} iconPosition="start" />
//                                 <Tab label="Tagged" {...a11yProps(2)} icon={<AccountBoxOutlinedIcon sx={{ marginRight: "2px !important" }} />} iconPosition="start" />
//                             </Tabs>
//                         </Box>
//                         <TabPanel value={value} index={0}>
//                             <Box>
//                                 {
//                                     searchedUserDetails?.post?.length > 0 ? <Grid rowGap={2} columnSpacing={1} sx={{ background: "tomato" }} container xl={12} >
//                                         {
//                                             searchedUserDetails.post.map((post: any, i: any) => {
//                                                 return <Grid item xs={12} sm={6} md={4} xl={4} key={`${i + 1}`}>
//                                                     <img
//                                                         className="gridImage"
//                                                         alt={post.postLink.split("-")[3]} src={post.postLink} />
//                                                 </Grid>
//                                             })
//                                         }
//                                     </Grid> : <h1>No Post Availble</h1>
//                                 }
//                             </Box>
//                         </TabPanel>
//                         <TabPanel value={value} index={1}>
//                             <Box>
//                                 <ImageList cols={3} >
//                                     {
//                                         searchedUserDetails?.saved?.length > 0 ?
//                                             searchedUserDetails.saved.map((post: any, i: any) => {
//                                                 return <ImageListItem key={`${i + 1}`}>
//                                                     <img
//                                                         style={{ height: "270px", }}
//                                                         alt={post.postLink.split("-")[3]} src={post.postLink} />
//                                                 </ImageListItem>
//                                             })
//                                             : <h1>No Saved Post Availble</h1>
//                                     }
//                                 </ImageList>
//                             </Box>
//                         </TabPanel>
//                         <TabPanel value={value} index={2}>
//                             <Box>
//                                 <ImageList cols={3} >
//                                     {
//                                         searchedUserDetails?.tagged?.length > 0 ?
//                                             searchedUserDetails.tagged.map((post: any, i: any) => {
//                                                 return <ImageListItem key={`${i + 1}`}>
//                                                     <img
//                                                         style={{ height: "270px", }}
//                                                         alt={post.postLink.split("-")[3]} src={post.postLink} />
//                                                 </ImageListItem>
//                                             })
//                                             : <h1>No Tagged Post Availble</h1>
//                                     }
//                                 </ImageList>
//                             </Box>
//                         </TabPanel>
//                     </Box>
//                 </Grid>
//             </Grid>
//         </Container> : <h1>User Not Found</h1>
//     }
// </> */}