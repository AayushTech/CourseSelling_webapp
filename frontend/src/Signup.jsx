import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import axios from "axios";

function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
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
          Welcome to Codeit
        </Typography>
        <br />
        <Card sx={{ minWidth: 275, padding: "25px", borderRadius: "10px" }}>
          <center>
            <div>
              <TextField
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                fullWidth
                label="Email"
                variant="outlined"
              />
              <br />
              <br />
              <TextField
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
              />
              <br />
              <br />
              {/* Call handleSignup function when the button is clicked */}
              <Button
                variant="contained"
                onClick={() => {
                  if (email === "" || password === "") return;

                  axios
                    .post("http://localhost:3000/admin/signup", {
                      username: email,
                      password: password,
                    })
                    .then((data) => {
                      // Handle the response data here
                      if (data.message === "Admin created successfully") {
                        // Admin signed up successfully
                        setAlertMessage("Admin signed up successfully!");
                      } else if (data.message === "Admin already exists") {
                        // Admin already exists
                        setAlertMessage("Admin already exists!");
                      }
                    })
                    .catch((error) => {
                      // Handle any errors that occurred during the fetch
                      console.error("Error:", error);
                    });
                }}
              >
                Signup
              </Button>
            </div>
            <br />
            {alertMessage && <div>{alertMessage}</div>}
          </center>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
