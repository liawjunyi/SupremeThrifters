"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
export default function Profile() {
  return (
    <form className="m-20 mb-10">
      <div className="space-y-12">
        <div className="sm:container lg:border-b lg:border-gray-300 lg:pb-12 lg:grid lg:grid-cols-12">
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
                  <svg
                    className="h-20 w-20 text-gray-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <Button size={"small"}>Change</Button>
                </div>
              </div>

              <div className="sm:col-span-4">
                <Input
                  label={"Username"}
                  placeholder={"RealKrazyWoman"}
                ></Input>
              </div>

              <div className="col-span-full">
                <label
                  for="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  About
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows="3"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about yourself.
                </p>
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
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <Input label={"First Name"} placeholder={"Real"}></Input>
              </div>

              <div className="sm:col-span-3">
                <Input label={"Last Name"} placeholder={"KrazyWoman"}></Input>
              </div>

              <div className="sm:col-span-4">
                <Input
                  label={"Email Address"}
                  placeholder={"realkrazywoman@prnk.com"}
                ></Input>
              </div>

              <div className="sm:col-span-3">
                <label
                  for="area"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Area
                </label>
                <div className="mt-2">
                  <select
                    id="area"
                    name="area"
                    autocomplete="area-name"
                    className="block w-full rounded-md border-1 py-1.5 text-gray-900  "
                  >
                    <option>North</option>
                    <option>North-East</option>
                    <option>North-West</option>
                    <option>East</option>
                    <option>South</option>
                    <option>South-East</option>
                    <option>South-West</option>
                    <option>West</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <Input
                  label={"Street Address"}
                  placeholder={"Serangoon North Avenue 3"}
                ></Input>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <Input label={"Block"} placeholder={"286"}></Input>
              </div>

              <div className="sm:col-span-2">
                <Input label={"Unit Number"} placeholder={"#12-10"}></Input>
              </div>

              <div className="sm:col-span-2">
                <Input label={"Postal Code"} placeholder={"550123"}></Input>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:container lg:border-b lg:border-gray-300 lg:pb-12 lg:grid lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Notifications
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              We'll always let you know about important changes, but you pick
              what else you want to hear about.
            </p>
          </div>
          <div className="lg:col-span-8 col-start-6 col-end-12">
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
                      ></input>
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        for="comments"
                        className="font-medium text-gray-900"
                      >
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
      </div>

      <div className="mt-6 flex items-center justify-center lg:justify-end gap-x-6">
        <Button size={"small"}>
          <Link href="/">Cancel</Link>
        </Button>
        <Button size={"small"} type={"submit"}>
          <Link href="/">Save</Link>
        </Button>
      </div>
    </form>
  );
}
