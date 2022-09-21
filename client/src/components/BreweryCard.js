import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// function RecipeDetailCard( {brewery} ) {
//   const [expanded, setExpanded] = React.useState(false);
//   const {name, state} = brewery


//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             fstR
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title={brewery.name}
//         // subheader={strCategory}
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         // image={strMealThumb}
//         // alt={strMeal}
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//         {/* Region: {strArea} */}

//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         {/* <IconButton aria-label="share">
//           <YouTubeIcon href={strYoutube}/>
//         </IconButton> */}
//         {/* <a href={strYoutube}> */}
//           {/* <YouTubeIcon /> */}
//         {/* </a> */}
        
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           {/* <Typography paragraph>Method:</Typography> */}
//           <Typography paragraph>
//           Instructions: <br/>
//           {/* {strInstructions} */}
//           </Typography>
//           <Typography paragraph>
//           stufff
//           </Typography>
//           <Typography paragraph>
//             {/* {strInstructions} */}
//           </Typography>
//           <Typography>
//             miore stuff
//           </Typography>
//           {/* <a href={strSource}>Source</a> */}
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }

// export default RecipeDetailCard;


import { Card } from 'antd';

function BreweryCard({ brewery }) {
  // console.log(brewery)
  const { name, brewery_type, street, city, state, phone, website_url } = brewery

  return(
    <>
      <Card title={name} extra={<a href="/">More</a>} style={{ width: 300 }}>
        <p>{brewery_type}</p>
        <p>{street}</p>
        <p>{city}</p>
        <p>{state}</p>
        <p>{phone}</p>
        <p>{website_url}</p>
        <hr/>
      </Card>
    </>
  )
};

export default BreweryCard;