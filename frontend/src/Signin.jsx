import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function Signin() {
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
          Welcome back
        </Typography>
        <br />
        <Card sx={{ minWidth: 275, padding: "25px", borderRadius: "10px" }}>
          <center>
            <div>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <br />
              <br />
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
              <br />
              <Button
                variant="contained"
                onClick={() => {
                  if (email === "" || password === "") return;

                  axios
                    .post("http://localhost:3000/admin/login", {
                      username: email,
                      password: password,
                    })
                    .then((response) => {
                      const data = response.data;
                      console.log(data);
                      // Handle the response data here if needed
                      if (data.message === "Logged in successfully") {
                        console.log(data);
                        localStorage.setItem("token", data.token);
                        // Admin signed up successfully
                        setAlertMessage("Logged in successfully! 😎");
                        window.location = "/";
                      } else if (
                        data.message === "Invalid username or password"
                      ) {
                        // Admin already exists
                        console.log(data);
                        setAlertMessage("Invalid username or password 🙄");
                      }
                    })
                    .catch((error) => {
                      // Handle any errors that occurred during the fetch
                      console.error("Error:", error);
                    });
                }}
              >
                Signin
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

export default Signin;
