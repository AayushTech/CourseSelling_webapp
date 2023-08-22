import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import React, { useRef, useState } from "react";

function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageLink, setImage] = useState("");
  const [alertMessage, setAlertmsg] = useState("");

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <Typography
          variant={"h5"}
          style={{
            marginTop: "8rem",
          }}
        >
          Add Course Details here
        </Typography>
        <br />
        <Card sx={{ minWidth: 275, padding: "25px", borderRadius: "10px" }}>
          <center>
            <div>
              <TextField
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                label="title"
                variant="standard"
                fullWidth
              />
              <br />
              <br />
              <TextField
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                label="description"
                variant="standard"
                fullWidth
              />
              <br />
              <br />
              <TextField
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                label="price"
                variant="standard"
                fullWidth
              />
              <br />
              <br />
              <TextField
                onChange={(e) => {
                  setImage(e.target.value);
                }}
                label="Image Link"
                variant="standard"
                fullWidth
              />
              <br />
              <br />
              {/* Call handleSignup function when the button is clicked */}
              <Button
                variant="contained"
                onClick={() => {
                  if (title === "" || description === "" || price === "")
                    return;

                  fetch("http://localhost:3000/admin/courses", {
                    method: "POST",
                    body: JSON.stringify({
                      title: title,
                      description: description,
                      price: price,
                      imageLink: imageLink,
                      published: true,
                    }),
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                  })
                    .then((response) => response.json())
                    .then((data) => {
                      if (data.message === "Course created successfully") {
                        console.log(data);
                        setAlertmsg("Course created successfully! 🥳");
                      }

                      // Handle the response data here if needed
                    })
                    .catch((error) => {
                      // Handle any errors that occurred during the fetch
                      console.error("Error:", error);
                    });
                }}
              >
                Add Course
              </Button>
            </div>
            <br />
            <div>{alertMessage}</div>
          </center>
        </Card>
      </div>
    </div>
  );
}

export default AddCourse;
