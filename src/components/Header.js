import React, { useEffect } from "react";
import styles from "styled-components";
import { auth, provider } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, logoutUser } from "../store/features/userSlice";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Header = () => {
  const name = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  const photo = useSelector((state) => state.user.photo);
  const history = useHistory();

  const setUser = (user) => {
    dispatch(
      loginUser({
        name: user.displayName,
        photo: user.photoURL,
        email: user.email,
      })
    );
  };

  const logout = () => dispatch(logoutUser());

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        // history.push("/home");
      } else {
        logout();
        history.push("/");
      }
    });
    return unsubscribe;
  }, [name]);

  const login = () => {
    auth
      .signInWithPopup(provider)
      .then((authUser) => {
        setUser(authUser.user);
        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
        // alert(err);
      });
  };
  return (
    <Container>
      <Logo>
        {/* <img src="/img/logo.svg" alt="" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 1044.9 568.7"
        >
          <defs>
            <radialGradient
              id="radial-gradient"
              cx="944.52"
              cy="281.8"
              r="760.12"
              gradientTransform="matrix(1 0 0 -1 0 563.4)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.01" stopColor="#fff"></stop>
              <stop offset="0.03" stopColor="#cbffff"></stop>
              <stop offset="0.06" stopColor="#96ffff"></stop>
              <stop offset="0.08" stopColor="#68ffff"></stop>
              <stop offset="0.11" stopColor="#43ffff"></stop>
              <stop offset="0.14" stopColor="#25ffff"></stop>
              <stop offset="0.16" stopColor="#1ff"></stop>
              <stop offset="0.19" stopColor="#04ffff"></stop>
              <stop offset="0.22" stopColor="#0ff"></stop>
              <stop offset="1" stopColor="#00f" stopOpacity="0"></stop>
            </radialGradient>
          </defs>
          <path
            fill="#fff"
            d="M737.8 367.4c-14.4 3.3-52.3 5.2-52.3 5.2l-4.8 15s18.9-1.6 32.7-.2c0 0 4.5-.5 5 5.1a86.46 86.46 0 01-.4 10.8s-.3 3.4-5.1 4.2c-5.2.9-40.8 2.2-40.8 2.2l-5.8 19.5s-2.1 4.5 2.7 3.2c4.5-1.2 41.8-8.2 46.7-7.2 5.2 1.3 11 8.2 9.3 14.6-2 7.8-39.2 31.6-61.9 29.9 0 0-11.9.8-22-15.3-9.4-15.3 3.6-44.4 3.6-44.4s-5.9-13.6-1.6-18.1c0 0 2.6-2.3 10-2.9l9.1-18.9s-10.4.7-16.6-6.9c-5.8-7.3-6.2-10.6-1.8-12.6 4.7-2.3 48-10.2 77.8-9.2 0 0 10.4-1 19.3 17-.1 0 4.3 7.3-3.1 9zM625.7 440c-3.8 9-13.9 18.6-26.4 12.6s-32.1-46.3-32.1-46.3-7.5-15-8.9-14.7c0 0-1.6-2.9-2.6 13.5s.2 48.3-6.3 53.3c-6.2 5-13.7 3-17.6-2.9-3.5-5.8-5-19.6-3.1-43.8 2.3-24.2 7.9-50 15.1-58.1s13-2.2 15.2-.1c0 0 9.6 8.7 25.5 34.3l2.8 4.7s14.4 24.2 15.9 24.1c0 0 1.2 1.1 2.2.3 1.5-.4.9-8.2.9-8.2s-3-26.3-16.1-70.9c0 0-2-5.6-.6-10.8s6.6-2.8 6.6-2.8 20.4 10.2 30.2 43.4c9.7 33.5 3.1 63.4-.7 72.4zm-100.2-85.3c-1.7 3.4-2.7 8.3-11.3 9.6 0 0-82.3 5.6-86.2 11.4 0 0-2.9 3.4 1.6 4.4s23.1 3.4 32.1 3.9c9.6.1 42 .4 53.6 14.9 0 0 6.9 6.9 6.6 22.5-.3 16-3.1 21.6-9.3 27.4-6.5 5.4-62.3 30.4-98.3-8 0 0-16.6-18.5 5.7-32.5 0 0 16.1-9.7 57 1.7 0 0 12.4 4.5 11.8 9-.7 4.8-10.2 9.9-24 9.6-13.4-.4-23.2-6.8-21.3-5.8 1.8.7-14.4-7.8-19.4-2-5 5.3-3.8 8.6 1.1 11.9 12.5 7.1 60.8 4.6 75.2-11.4 0 0 5.7-6.5-3-11.8-8.7-5-33.6-8-43.3-8.5-9.3-.5-43.9.1-48.9-9.1 0 0-5-6.2.5-23.8 5.8-18.4 46.1-25.5 63.5-27.1 0 0 47.9-1.7 56.7 8.1a7.52 7.52 0 01-.4 5.6zm-136 107.9c-5.8 4.3-18.1 2.4-21.6-2.4-3.5-4.3-4.7-21.4-4-48.2.7-27.1 1.3-60.7 7.1-66 6.2-5.4 10-.7 12.4 3 2.6 3.6 5.7 7.6 6.4 16.1s2.6 53.1 2.6 53.1 2.6 40.2-2.9 44.4zM402 318.8c-16.9 5.6-28.5 3.7-38.3-.5-4.3 7.5-6.8 9.8-10.1 10.3-4.8.5-9.1-7.2-9.9-9.7-.8-1.9-3.1-5.1-.3-12.7-9.6-8.6-10.3-20.2-8.7-28 2.4-9 18.6-43.2 67.9-47.2 0 0 24.1-1.8 28.2 11.1h.7s23.4.1 22.9 20.9c-.3 20.9-26 46.9-52.4 55.8zm-46-46.3c-5 8-5.2 12.8-2.9 16.1 5.7-8.7 16.1-22.4 31.4-32.8-11.8 1-21.7 6.1-28.5 16.7zm68.1-13.4c-15.5 2.3-39.5 23.1-50.9 40.1 17.5 3.2 48.4 2 62.1-25.9-.1 0 6.5-17.3-11.2-14.2zm420.8 161.1c-9.3 16.2-35.4 50-70.2 42.1-11.5 27.9-21.1 56-26.6 98.2 0 0-1.2 8.2-8 5.3-6.7-2.4-17.9-13.6-20.1-29.1-2.4-20.4 6.7-54.9 25.2-94.4-5.4-8.8-9.1-21.4-5.9-39.3 0 0 4.7-33.2 38-63.2 0 0 4-3.5 6.3-2.4 2.6 1.1 1.4 11.9-.7 17.1s-17 31-17 31-9.3 17.4-6.7 31.1c17.5-26.9 57.3-81.2 82-64.1 8.3 5.9 12.1 18.8 12.1 32.7-.1 12.3-3 25.3-8.4 35zm-7.2-42.6s-1.4-10.7-11.8 1.1c-9 9.9-25.2 28.6-38.3 53.9 13.7-1.5 26.9-9 30.9-12.8 6.5-5.8 21.6-21.4 19.2-42.2zm-485.5 13.6c-1.9 24.2-11.2 64.9-77.1 85-43.5 13.1-84.6 6.8-107 1.1-.5 8.9-1.5 12.7-2.9 14.2-1.9 1.9-16.1 10.1-23.9-1.5-3.5-5.5-5.3-15.5-6.3-24.4-50.4-23.2-73.6-56.6-74.5-58.1-1.1-1.1-12.6-13.1-1.1-27.8 10.8-13.3 46.1-26.6 77.9-32 1.1-27.2 4.3-47.7 8.1-57.1 4.6-10.9 10.4-1.1 15.4 6.3 4.2 5.5 6.7 29.2 6.9 48.1 20.8-1 33.1.5 56.3 4.7 30.2 5.5 50.4 20.9 48.6 38.4-1.3 17.2-17.1 24.3-23.1 24.8-6.3.5-16.1-4-16.1-4-6.7-3.2-.5-6 7.6-9.5 8.8-4.3 6.8-8.7 6.8-8.7-3.3-9.6-42.5-16.3-81.5-16.3-.2 21.5.9 57.2 1.4 78 27.3 5.2 47.7 4.2 47.7 4.2s99.6-2.8 102.6-66.4S218.7 265.4 143 246c-75.6-19.8-118.4-6-122.1-4.1-4 2-.3 2.6-.3 2.6a71.47 71.47 0 0111.2 3c7.5 2.4 1.7 6.3 1.7 6.3-12.9 4.1-27.4 1.5-30.2-4.4s1.9-11.2 7.3-18.8c5.4-8 11.3-7.7 11.3-7.7 93.5-32.4 207.4 26.2 207.4 26.2C336 303.2 354.2 366.6 352.2 391.2zM70 387.9c-10.6 5.2-3.3 12.7-3.3 12.7 19.9 21.4 44.4 34.8 67.7 43.1 2.7-36.9 2.3-49.9 2.6-68.5-36.4 2.5-57.4 8.3-67 12.7zM1042.9 380.3v13.2a5.16 5.16 0 01-5.2 5.2h-62.9c0 3.3.1 6.2.1 8.9a480 480 0 01-2.7 53.3 5.19 5.19 0 01-5.1 4.7h-13.6a4.84 4.84 0 01-3.6-1.6 4.75 4.75 0 01-1.2-3.8 470.56 470.56 0 002.8-52.6c0-2.8 0-5.7-.1-8.9h-62.2a5.16 5.16 0 01-5.2-5.2v-13.2a5.16 5.16 0 015.2-5.2h61.3a460.85 460.85 0 00-8.1-63.2 4.6 4.6 0 01.9-3.6 4.22 4.22 0 013.3-1.6h14.7a4.81 4.81 0 014.7 3.9 507.25 507.25 0 018 64.5h63.7a5.29 5.29 0 015.2 5.2z"
          ></path>
          <path
            fill="none"
            d="M202.2 206h-.1m-.7.1c-.3 0-.6-.1-.9-.1a2.77 2.77 0 00.9.1zm0 0c-.3 0-.6-.1-.9-.1a2.77 2.77 0 00.9.1z"
          ></path>
          <path
            fill="url(#radial-gradient)"
            d="M957.3 275.6a438.92 438.92 0 00-771.9-78 5.12 5.12 0 00-.6 4.5 4.88 4.88 0 003.2 3.2l11.4 3.9a7.47 7.47 0 002 .3 6.59 6.59 0 005.3-2.8A415.52 415.52 0 01550.6 24.5a416.08 416.08 0 01383.1 253.9 6 6 0 005.5 3.7h13.6a4.58 4.58 0 003.9-2.1 4.38 4.38 0 00.6-4.4zm-755.9-69.5a2.92 2.92 0 01-.9-.2 2.92 2.92 0 00.9.2zm735 74.2a4.05 4.05 0 00.9.5c-.3-.2-.6-.3-.9-.5z"
          ></path>
        </svg>
      </Logo>
      {name ? (
        <>
          <NavMenu>
            <Link to="/home">
              {/* <img src="/img/home-icon.svg" alt="" />
               */}
              <svg
                alt=""
                aria-hidden="true"
                aria-label="home"
                color="#fff"
                role="img"
                version="1.1"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
                data-route="HOME"
                style={{ color: "white", fill: "white" }}
              >
                <path
                  d="M26.882 19.414v10.454h-5.974v-5.227h-5.974v5.227H8.961V19.414H5.227L17.921 6.72l12.694 12.694h-3.733z"
                  className="sc-kAzzGY dGwULW"
                ></path>
              </svg>
              <span>Home</span>
            </Link>
            <Link to="/home">
              {/* <img src="/img/search-icon.svg" alt="" /> */}
              <svg
                alt=""
                aria-hidden="true"
                aria-label="search"
                color="#fff"
                role="img"
                version="1.1"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
                data-route="SEARCH"
                style={{ color: "white", fill: "white" }}
              >
                <path
                  d="M21.866 24.337c-3.933 2.762-9.398 2.386-12.914-1.13-3.936-3.936-3.936-10.318 0-14.255 3.937-3.936 10.32-3.936 14.256 0 3.327 3.327 3.842 8.402 1.545 12.27l4.56 4.558a2 2 0 0 1 0 2.829l-.174.173a2 2 0 0 1-2.828 0l-4.445-4.445zm-5.786-1.36a6.897 6.897 0 1 0 0-13.794 6.897 6.897 0 0 0 0 13.794z"
                  className="sc-kAzzGY dGwULW"
                ></path>
              </svg>
              <span>search</span>
            </Link>
            <Link to="/home">
              {/* <img src="/img/watchlist-icon.svg" alt="" /> */}
              <svg
                alt=""
                aria-hidden="true"
                aria-label="watchlist"
                color="#fff"
                role="img"
                version="1.1"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
                data-route="WATCHLIST"
                style={{ color: "white", fill: "white" }}
              >
                <path
                  d="M27.85 15.1H20.9V8.15a2.9 2.9 0 0 0-5.8 0v6.95H8.15a2.9 2.9 0 0 0 0 5.8h6.95v6.95a2.9 2.9 0 0 0 5.8 0V20.9h6.95a2.9 2.9 0 1 0 0-5.8z"
                  className="sc-kAzzGY dGwULW"
                ></path>
              </svg>
              <span>watchlist</span>
            </Link>
            <Link to="/home">
              {/* <img src="/img/original-icon.svg" alt="" /> */}
              <svg
                alt=""
                aria-hidden="true"
                aria-label="originals"
                color="#fff"
                role="img"
                version="1.1"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
                data-route="ORIGINALS"
                style={{ color: "white", fill: "white" }}
              >
                <path
                  d="M17.625 26.028L10.44 30l1.373-8.412L6 15.631l8.033-1.228 3.592-7.653 3.592 7.653 8.033 1.228-5.813 5.957L24.81 30z"
                  className="sc-kAzzGY dGwULW"
                ></path>
              </svg>
              <span>originals</span>
            </Link>
            <Link to="/home">
              {/* <img src="/img/movie-icon.svg" alt="" /> */}
              <svg
                alt=""
                aria-hidden="true"
                aria-label="movies"
                color="#fff"
                role="img"
                version="1.1"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
                data-route="MOVIES"
                style={{ color: "white", fill: "white" }}
              >
                <path
                  d="M24.71 20.07a2.97 2.97 0 1 0-4.2-4.2 2.97 2.97 0 0 0 4.2 4.2m-12.262 0a2.97 2.97 0 1 0-4.2-4.2 2.97 2.97 0 0 0 4.2 4.2m6.173-10.31a2.969 2.969 0 1 0-4.199 4.198 2.969 2.969 0 0 0 4.199-4.198m0 12.262a2.969 2.969 0 1 0-4.199 4.198 2.969 2.969 0 0 0 4.199-4.198m-1.544-4.629a.846.846 0 1 0-1.197 1.196.846.846 0 0 0 1.197-1.196m18.06-.644c-3.33 6.913-8.165 9.928-11.635 11.24-2.57.971-4.762 1.178-5.949 1.208-.348.032-.698.053-1.052.053C10.287 29.25 5.25 24.213 5.25 18S10.287 6.75 16.5 6.75c6.214 0 11.25 5.037 11.25 11.25a11.19 11.19 0 0 1-2.493 7.054c2.832-1.612 5.844-4.382 8.138-9.143a.968.968 0 0 1 1.742.838"
                  className="sc-kAzzGY dGwULW"
                ></path>
              </svg>
              <span>movies</span>
            </Link>
            <Link to="/home">
              {/* 
              <img src="/img/series-icon.svg" alt="" /> */}
              <svg
                alt=""
                aria-hidden="true"
                aria-label="series"
                color="#fff"
                role="img"
                version="1.1"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
                data-route="SERIES"
                style={{ color: "white", fill: "white" }}
              >
                <path
                  d="M18.84 11.965h6.722a4 4 0 0 1 4 4V26a4 4 0 0 1-4 4H10.375a4 4 0 0 1-4-4V15.965a4 4 0 0 1 4-4h6.211l-3.981-3.981a1.162 1.162 0 1 1 1.643-1.644l3.465 3.465 3.464-3.465a1.162 1.162 0 0 1 1.644 1.644l-3.982 3.981zm6.428 7.73a1.718 1.718 0 1 0 0-3.436 1.718 1.718 0 0 0 0 3.436zm0 6.011a1.718 1.718 0 1 0 0-3.435 1.718 1.718 0 0 0 0 3.435z"
                  className="sc-kAzzGY dGwULW"
                ></path>
              </svg>
              <span>series</span>
            </Link>
          </NavMenu>
          <SignOut>
            <UserImg src={photo} alt="" />
            <Dropdown onClick={() => auth.signOut()}>SignOut</Dropdown>
          </SignOut>
        </>
      ) : (
        <Login onClick={login}>Login</Login>
      )}
    </Container>
  );
};

export default Header;

const Container = styles.header`
background:#000;
padding: 0.7rem 2rem; 
position:fixed;
top:0;
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
z-index:1;
`;
const Logo = styles.div`
svg, img{
    width:85px;
    object-fit:contain;
}
`;
const Login = styles.a`
padding:5px 10px;
display:inline-block;
border: 3px solid rgba(219,219,219,0.8);
font-size:1.1rem;
font-weight: lighter;
letter-spacing: 3px;
border-radius: 4px;
cursor:pointer;
transition: all 0.2s ease-in-out;

&:hover {
    background: white;
    color: rgb(19,19,19);
}
`;
const NavMenu = styles.ul`
flex:1;
margin: 0 2rem;
display:flex;
align-items:center;

@media (max-width:940px) {
        display:none;
}

a{
    display:flex;
    align-items:center;
    margin-right: 1rem;

   img, svg{
        width:20px;
        margin-right: 5px;
    }
    span{
        text-transform:uppercase;
        font-size:80%;
        letter-spacing: 2px;
        position:relative;

        &::after {
            content:"";
            position:absolute;
            width:100%;
            height:2px;
            background:#f9f9f9;
            bottom:-5px;
            left:0;
            transform-origin:left ;
            transform:scaleX(0);
            opacity:0;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        }
        &:hover {
            &::after {
                transform: scaleX(1);
                opacity:1;
            }
        }
    }
}
`;
const SignOut = styles.div`
position:relative;
cursor:pointer;
&:hover {
     a {
        opacity:1;
    }
}
`;
const UserImg = styles.img`
width:50px;
border: 2px solid rgba(255,255,255,0.5);
height:50px;
border-radius:50%;
`;
const Dropdown = styles.a`
position:absolute;
top:40px;
left:-60px;
background: rgb(19,19,19);
border:1px solid rgba(213,213,213,0.5);
padding: 10px 20px;
border-radius:4px;
z-index:2;
opacity:0;
letter-spacing: 1.5px;
transition: opacity 0.2s linear;
`;
