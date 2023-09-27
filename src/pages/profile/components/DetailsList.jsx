import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import "./DetailsList.css";

const Demo = styled("div")(({ theme }) => ({
  width: "100%",
  borderRadius: "10px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "white",
}));

const getEpisodeName = (episodeLink) => {
  return "Episode #" + episodeLink.split("/").pop();
};

export default function DetailsList({ profile }) {
  
  return (
    <Box>
      <Grid>
        <Grid item xs={12} md={6}>
          <Demo>
            <List>
              <ListItem>
                <ListItemText className="listItemName" primary="Name:" />
                <ListItemText
                  className="listItemValue"
                  primary={profile.name}
                />
              </ListItem>
              <ListItem>
                <ListItemText className="listItemName" primary="Origin:" />
                <Link to={profile.origin.url}>
                  <ListItemText
                    className="listItemValue"
                    primary={profile.origin.name}
                  />
                </Link>
              </ListItem>
              <ListItem>
                <ListItemText className="listItemName" primary="Gender:" />
                <ListItemText
                  className="listItemValue"
                  primary={profile.gender}
                />
              </ListItem>
              <ListItem>
                <ListItemText className="listItemName" primary="Species:" />
                <ListItemText
                  className="listItemValue"
                  primary={profile.species}
                />
              </ListItem>
              {profile.type && (
                <ListItem>
                  <ListItemText className="listItemName" primary="Type:" />
                  <ListItemText
                    className="listItemValue"
                    primary={profile.type}
                  />
                </ListItem>
              )}
              <ListItem>
                <ListItemText className="listItemName" primary="Status:" />
                <ListItemText
                  className="listItemValue"
                  primary={profile.status}
                />
              </ListItem>
              <ListItem>
                <ListItemText className="listItemName" primary="Location:" />
                <Link to={profile.location.url}>
                  <ListItemText
                    className="listItemValue"
                    primary={profile.location.name}
                  />
                </Link>
              </ListItem>
            </List>
            <Typography
              sx={{ display: "flex", justifyContent: "center" }}
              variant="h6"
              id="tableTitle"
              component="div"
            >
              Episodes:
            </Typography>
            <List>
              {profile.episode.map((element) => (
                <ListItem
                  sx={{ display: "flex", justifyContent: "center" }}
                  key={element}
                >
                  <Link to={element}>
                    <ListItemText
                      className="listItemValue"
                      primary={getEpisodeName(element)}
                    />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}
