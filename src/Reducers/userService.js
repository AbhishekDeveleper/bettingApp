import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));

const signup = async(userData) => {
    const response = await axios.post(
        "http://localhost:4000/api/signup",
        userData, { withCredentials: true }
    );
    if (response.data) {
        localStorage.setItem("signupmessage", JSON.stringify(response.data));
    }
    return response.data;
};

const forgotpassword = async(userData) => {
    const response = await axios.post(
        "http://localhost:4000/api/forgotPassword",
        userData
    );
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const resetpassword = async(userData) => {
    const response = await axios.post(
        "http://localhost:4000/api/resetPassword",
        userData
    );
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const verifyingOtp = async(userData) => {
    const response = await axios.post(
        "http://localhost:4000/api/verifyOtp",
        userData
    );
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const updatePassword = async(userData) => {
    const response = await axios.patch(
        "http://localhost:4000/api/updateMyPassword",
        userData, { headers: { Authorization: `Bearer ${user?.token}` } }
    );
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const login = async(logindata) => {
    const res = await axios.post("http://localhost:4000/api/login", logindata, {
        withCredentials: true,
    });
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const logout = async() => {
    const res = await axios.get("http://localhost:4000/api/logout", {
        withCredentials: true,
    });
    if (res.data) {
        localStorage.clear();
    }
    return res.data;
};

const getJoinedUsers = async() => {
    const response = await axios.get(
        "http://localhost:4000/api/getjoinedUser", { headers: { Authorization: `Bearer ${user?.token}` } }, {
            withCredentials: true,
        }
    );

    if (response.data) {
        localStorage.setItem("joinedUsers", JSON.stringify(response.data));
    }
    return response.data;
};

const selecttenthColor = async(usercolor) => {
    const res = await axios.patch(
        "http://localhost:4000/api/choosetenthColor",
        usercolor, { headers: { Authorization: `Bearer ${user?.token}` } }, {
            withCredentials: true,
        }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};
const selecttwoHundredColor = async(usercolor) => {
    const res = await axios.patch(
        "http://localhost:4000/api/choosetwoHundredColor",
        usercolor, { headers: { Authorization: `Bearer ${user?.token}` } }, {
            withCredentials: true,
        }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};
const selecttweentyColor = async(usercolor) => {
    const res = await axios.patch(
        "http://localhost:4000/api/choosetweentyColor",
        usercolor, { headers: { Authorization: `Bearer ${user?.token}` } }, {
            withCredentials: true,
        }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};
const selectfourtyColor = async(usercolor) => {
    const res = await axios.patch(
        "http://localhost:4000/api/choosefourtyColor",
        usercolor, { headers: { Authorization: `Bearer ${user?.token}` } }, {
            withCredentials: true,
        }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const selectsixtyColor = async(usercolor) => {
    const res = await axios.patch(
        "http://localhost:4000/api/choosesixtyColor",
        usercolor, { headers: { Authorization: `Bearer ${user?.token}` } }, {
            withCredentials: true,
        }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const selectseventyColor = async(usercolor) => {
    const res = await axios.patch(
        "http://localhost:4000/api/chooseseventyColor",
        usercolor, { headers: { Authorization: `Bearer ${user?.token}` } }, {
            withCredentials: true,
        }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const selectoneFiftyColor = async(usercolor) => {
    const res = await axios.patch(
        "http://localhost:4000/api/chooseoneFiftyColor",
        usercolor, { headers: { Authorization: `Bearer ${user?.token}` } }, {
            withCredentials: true,
        }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const selecthundredColor = async(usercolor) => {
    const res = await axios.patch(
        "http://localhost:4000/api/choosehundredColor",
        usercolor, { headers: { Authorization: `Bearer ${user?.token}` } }, {
            withCredentials: true,
        }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const joiningUser = async(joineuser) => {
    const res = await axios.patch(
        "http://localhost:4000/api/letjoine",
        joineuser, { headers: { Authorization: `Bearer ${user?.token}` } }, {
            withCredentials: true,
        }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }

    return res.data;
};

const checkColors = async() => {
    const res = await axios.get(
        "http://localhost:4000/api/checkColor", { headers: { Authorization: `Bearer ${user?.token}` } },

        { withCredentials: true }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const tenjoin = async() => {
    const res = await axios.get(
        "http://localhost:4000/api/tenjoining", {
            headers: { Authorization: `Bearer ${user?.token}` },
        }, { withCredentials: true }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const tweentyjoin = async() => {
    const res = await axios.get(
        "http://localhost:4000/api/tweentyjoining", { headers: { Authorization: `Bearer ${user?.token}` } },

        { withCredentials: true }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const fourtyjoin = async() => {
    const res = await axios.get(
        "http://localhost:4000/api/fourtyjoining", { headers: { Authorization: `Bearer ${user?.token}` } },

        { withCredentials: true }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const sixtyjoin = async() => {
    const res = await axios.get(
        "http://localhost:4000/api/sixtyjoining", { headers: { Authorization: `Bearer ${user?.token}` } },

        { withCredentials: true }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const seventyjoin = async() => {
    const res = await axios.get(
        "http://localhost:4000/api/seventyjoining", { headers: { Authorization: `Bearer ${user?.token}` } },

        { withCredentials: true }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const hundredjoin = async() => {
    const res = await axios.get(
        "http://localhost:4000/api/hundredjoining", { headers: { Authorization: `Bearer ${user?.token}` } },

        { withCredentials: true }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const onefiftyjoin = async() => {
    const res = await axios.get(
        "http://localhost:4000/api/onefiftyjoining", { headers: { Authorization: `Bearer ${user?.token}` } },

        { withCredentials: true }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const twohundredjoin = async() => {
    const res = await axios.get(
        "http://localhost:4000/api/twohundredjoining", { headers: { Authorization: `Bearer ${user?.token}` } },

        { withCredentials: true }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const resetColor = async() => {
    const res = await axios.get(
        "http://localhost:4000/api/reset", { headers: { Authorization: `Bearer ${user?.token}` } },

        { withCredentials: true }
    );
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const userService = {
    login,
    logout,
    selectfourtyColor,
    selecthundredColor,
    selectsixtyColor,
    selectseventyColor,
    selecttwoHundredColor,
    selecttenthColor,
    selecttweentyColor,
    selectoneFiftyColor,
    // playerJoining,
    resetpassword,
    verifyingOtp,
    forgotpassword,
    updatePassword,
    resetColor,
    tenjoin,
    hundredjoin,
    tweentyjoin,
    twohundredjoin,
    fourtyjoin,
    sixtyjoin,
    onefiftyjoin,
    seventyjoin,
    signup,
    getJoinedUsers,
    joiningUser,
    checkColors,
};
export default userService;