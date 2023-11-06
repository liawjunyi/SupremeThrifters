"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth, db, storage } from "../../../firebase";
import Navbar from "@/components/Navbar";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Sidemenu from "@/components/SideMenu";
import { useRouter } from "next/navigation";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [currentPassword, setCurrentPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [display, setDisplay] = useState("");
  const [pfp, setPfp] = useState("");
  const [email, setEmail] = useState("");
  const [isloggedin, setIsloggedin] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const { push } = useRouter();
  const profileRef = useRef(null);
  const auth = getAuth();
  const user = auth.currentUser;

  const addProfilePic = (e) => {
    const file = e.target.files[0];

    const imagesRef = ref(storage, `profilePic/${file.name}`);

    if (userData.profilePic) {
      setUserData((prev) => {
        return { ...prev, profilePic: null };
      });
      const deleteImageRef = ref(
        storage,
        `profilePic/${userData.profilePic.name}`
      );
      deleteObject(deleteImageRef);
      uploadBytes(imagesRef, file)
        .then(() => getDownloadURL(imagesRef))
        .then((url) => {
          setUserData((prev) => {
            return {
              ...prev,
              profilePic: {
                name: file.name,
                url: url,
              },
            };
          });
        });
    } else {
      uploadBytes(imagesRef, file)
        .then(() => getDownloadURL(imagesRef))
        .then((url) => {
          setUserData((prev) => {
            return {
              ...prev,
              profilePic: {
                name: file.name,
                url: url,
              },
            };
          });
        });
    }
  };

  const removeProfilePic = () => {
    setUserData((prev) => {
      return { ...prev, profilePic: null };
    });
    const deleteImageRef = ref(
      storage,
      `profilePic/${userData.profilePic.name}`
    );
    deleteObject(deleteImageRef);
  };

  const validateEmail = (email) => {
    // Use a simple regex pattern to check for a valid email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  

  const handleSubmit = () => {

    updateDoc(doc(db, "users", user.uid), userData)
      .then(() => alert("successfully saved"))
      .then(() => push("/"));

    // if (currentPassword && newPassword && confirmPassword) {
    //   const credential = EmailAuthProvider.credential(
    //     auth.currentUser.email,
    //     currentPassword
    //   );
    //   reauthenticateWithCredential(auth.currentUser, credential)
    //     .then(() => {
    //       if (newPassword === confirmPassword) {
    //         updatePassword(auth.currentUser, newPassword);
    //       } else {
    //         throw new Error("passwords do not match");
    //       }
    //     })
    //     .catch((err) => alert(err.message));
    // }
  };

  const fetchUserData = async () => {
    const usersRef = collection(db, "users");

    const q = query(usersRef, where("uid", "==", user.uid));

    const res = await getDocs(q);

    res.forEach((doc) => {
      console.log(doc.data());
      setUserData(doc.data());
    });
  };

  useEffect(() => {
    if (user) {
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      fetchUserData();
      setDisplay(displayName);
      setPfp(photoURL);
      setIsloggedin(true);
      setEmail(email);
    }
  }, [user]);




  return (
    <>
    <form
      className={`${
        menuActive ? "h-screen overflow-hidden" : "m-20 mt-40 mb-10 "
      } `}
    >
      <Sidemenu
        className={`transition-opacity duration-500 ${
          menuActive ? "opacity-100 ease-in z-20" : "opacity-0 ease-out -z-1"
        }`}
        onClick={() => setMenuActive((prev) => !prev)}
      />

      <Navbar menuActive={menuActive} setMenuActive={setMenuActive} />
      <div className="sm:container lg:border-b lg:border-gray-300 lg:pb-12 lg:grid lg:grid-cols-12 ">
        <div className="sm: lg:col-span-4">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Profile
          </h2>
          <p className="lg:mt-1 my-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </div>
        <div className=" lg:col-span-8 lg:col-start-6 lg:col-end-12">
          <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                for="photo"
                className="my-2 lg:my-0 block text-sm font-medium leading-6 text-gray-900"
              >
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                {isloggedin ? (
                  <img className="rounded-full w-20 h-20" src={pfp} alt="" />
                ) : (
                  <svg
                    className="h-20 w-20 text-gray-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}

                {/*  */}
                <Button size={"sm"} onClick={() => profileRef.current.click()}>
                  Change
                </Button>
                <input
                  type="file"
                  ref={profileRef}
                  hidden
                  onChange={addProfilePic}
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <Input
                label={"Username"}
                placeholder={"RealKrazyWoman"}
                value={userData?.username}
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    username: e.target.value,
                  });
                }}
              ></Input>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:container lg:border-b lg:border-gray-300 lg:pb-12 lg:grid lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>
        </div>
        <div className="lg:col-span-8 lg:col-start-6 lg:col-end-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
            <div className="sm:col-span-4">
              <Input
                label={"Name"}
                placeholder={"RealKrazyWoman"}
                value={userData?.name}
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    name: e.target.value,
                  });
                }}
              ></Input>
            </div>

            <div className="sm:col-span-4">
              <Input
                label={"Email Address"}
                placeholder={"realkrazywoman@prnk.com"}
                value={userData?.email}
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    email: e.target.value
                  });
                  
                  
                }}
              ></Input>
              {(userData?.email && validateEmail(userData.email)) ? (
                <p style={{ color: 'green' }}>Valid email address</p>
              ) : (
                <p style={{ color: 'red' }}>Invalid email address</p>
              )}
            </div>

            <div className="sm:col-span-4">
              <Input
                label={"Street Address"}
                placeholder={"Serangoon North Avenue 3"}
                value={userData?.address}
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    address: e.target.value,
                  });
                }}
              ></Input>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:container lg:border-b lg:border-gray-300 lg:pb-12 lg:grid lg:grid-cols-12 ">
        <div className="lg:col-span-4 ">
          <h2 className="text-base font-semibold leading-7 text-gray-900 ">
            Notifications
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            We'll always let you know about important changes, but you pick what
            else you want to hear about.
          </p>
        </div>
        <div className="lg:col-span-8 lg:col-start-6 lg:col-end-12">
          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                By Text
              </legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      checked
                    ></input>
                  </div>
                  <div className="text-sm leading-6">
                    <label for="comments" className="font-medium text-gray-900">
                      Listings
                    </label>
                    <p className="text-gray-500">
                      Get notified when someone near you makes a new listing.
                    </p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      checked
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    ></input>
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      for="candidates"
                      className="font-medium text-gray-900"
                    >
                      Following
                    </label>
                    <p className="text-gray-500">
                      Get notified when the person you follow lists an item.
                    </p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    ></input>
                  </div>
                  <div className="text-sm leading-6">
                    <label for="offers" className="font-medium text-gray-900">
                      Offers
                    </label>
                    <p className="text-gray-500">
                      Get notified when a someone gives you an offer.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Push Notifications
              </legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                These are delivered via SMS to your mobile phone.
              </p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    checked
                  ></input>
                  <label
                    for="push-everything"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Everything
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  ></input>
                  <label
                    for="push-email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Same as email
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  ></input>
                  <label
                    for="push-nothing"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    No push notifications
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center lg:justify-end gap-x-6">
        <Button size={"sm"}>
          <Link href="/">Cancel</Link>
        </Button>
        <Button size={"sm"} onClick={() => handleSubmit()}>
          Save
        </Button>
      </div>
    </form>
    <footer
      className="bg-primary text-center dark:bg-secondary w-full p-4">
      <div className="text-center text-neutral-300 dark:text-neutral-200">
        © 2023 Copyright: Supreme Thrifters
      </div>
    </footer>
    </>
  );
}
