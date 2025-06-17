import React from "react";
import { Container, Grid, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { signin, socialLogin } from "./service/ApiService";

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const username = data.get("username");
    const password = data.get("password");

    signin({ username: username, password: password });
  };

  const handleSocialLogin = (provider) => {
    socialLogin(provider);
  };

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} textAlign="center">
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
        </Grid>
      </Grid>
      <form noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="username"
              label="아이디"
              name="username"
              autoComplete="username"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="패스워드"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary" style={{ fontSize: "0.9rem"}}>
              로그인
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={() => handleSocialLogin("naver")}
              fullWidth
              variant="contained"
              style={{
                backgroundColor: "#1eb400",
                color: "#fff",
                backgroundImage: "url(https://d1s1r4xme959x6.cloudfront.net/images/icon/Ic-sns-naver.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "12px center",
                backgroundSize: "20px 20px",
                paddingLeft: 30,
                height: 40,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "0.9rem",
                justifyContent: "center"
              }}
            >
              네이버 로그인
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={() => handleSocialLogin("kakao")}
              fullWidth
              variant="contained"
              style={{
                backgroundColor: "#f7e317",
                color: "#3e201e",
                backgroundImage: "url(https://d1s1r4xme959x6.cloudfront.net/images/icon/ic-sns-kk.png)",
                backgroundSize: "24px 24px",
                backgroundPosition: "12px center",
                backgroundRepeat: "no-repeat",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "0.9rem",
                paddingLeft: 30,
                height: 40,
                justifyContent: "center"
              }}
            >
              카카오 로그인
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={() => handleSocialLogin("google")}
              fullWidth
              variant="contained"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #888",
                color: "#444",
                backgroundImage: "url(https://d1s1r4xme959x6.cloudfront.net/images/icon/ic-sns-google.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "12px center",
                backgroundSize: "24px 24px",
                paddingLeft: 30,
                height: 40,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "0.9rem",
                justifyContent: "center"
              }}
            >
              구글 로그인
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={() => handleSocialLogin("google")}
              fullWidth
              variant="contained"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #888",
                color: "#444",
                backgroundImage: "url(https://d1s1r4xme959x6.cloudfront.net/images/icon/ic-sns-google.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "12px center",
                backgroundSize: "24px 24px",
                paddingLeft: 30,
                height: 40,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "0.9rem",
                justifyContent: "center"
              }}
            >
              슬랙 로그인
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={() => handleSocialLogin("github")}
              fullWidth
              variant="contained"
              style={{
                backgroundColor: "#000",
                color: "#fff",
                backgroundImage: "url(https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "12px center",
                backgroundSize: "24px 24px",
                paddingLeft: 30,
                height: 40,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "0.9rem",
                justifyContent: "center"
              }}
            >
              깃허브 로그인
            </Button>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Link to="/signup" variant="body2">
              계정이 없습니까? 여기서 가입 하세요.
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Login;
