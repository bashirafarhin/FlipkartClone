// import { Container, List, ListItem, ListItemText } from "@mui/material";
// import { Link } from "react-router-dom";

// const Policy = () => {
//   return (
//     <Container sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
//       <List sx={{ display: "flex"}}>
//         <ListItem
//           component={Link}
//           to="/terms"
//           sx={{
//             borderRight: '1px solid gray',
//             color: "gray",
//             minWidth: "max-content",
//             paddingTop: '0px',
//             paddingBottom: '0px'
//           }}
//         >
//           <ListItemText primary="Terms of Use" />
//         </ListItem>

//         <ListItem
//           component={Link}
//           to="/privacy"
//           sx={{
//             borderRight: '1px solid gray',
//             color: "gray",
//             minWidth: "max-content",
//             paddingTop: '0px',
//             paddingBottom: '0px'
//           }}
//         >
//           <ListItemText primary="Privacy" />
//         </ListItem>

//         <ListItem
//           component={Link}
//           to="/shippingpolicy"
//           sx={{
//             borderRight: '1px solid gray',
//             color: "gray",
//             minWidth: "max-content",
//             paddingTop: '0px',
//             paddingBottom: '0px'
//           }}
//         >
//           <ListItemText primary="Shipping" />
//         </ListItem>

//         <ListItem
//           component={Link}
//           to="/contact"
//           sx={{
//             borderRight: '1px solid gray',
//             color: "gray",
//             minWidth: "max-content",
//             paddingTop: '0px',
//             paddingBottom: '0px'
//           }}
//         >
//           <ListItemText primary="Contact Us" />
//         </ListItem>

//         <ListItem
//           component={Link}
//           to="/refunds"
//           sx={{
//             borderRight: '1px solid gray-50',
//             color: "gray",
//             minWidth: "max-content",
//             paddingTop: '0px',
//             paddingBottom: '0px'
//           }}
//         >
//           <ListItemText primary="Refunds" />
//         </ListItem>
//       </List>
//     </Container>
//   );
// };

// export default Policy;
import { Container, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const Policy = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <List sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        {[
          { label: "Terms of Use", path: "/terms" },
          { label: "Privacy", path: "/privacy" },
          { label: "Shipping", path: "/shippingpolicy" },
          { label: "Contact Us", path: "/contact" },
          { label: "Refunds", path: "/refunds" },
        ].map((item, index) => (
          <ListItem
            key={index}
            component={Link}
            to={item.path}
            sx={{
              borderRight: index !== 4 ? "1px solid gray" : "none", // Border for all except last item
              color: "gray",
              minWidth: "max-content",
              padding: "0 10px",
              whiteSpace: "nowrap",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Policy;
