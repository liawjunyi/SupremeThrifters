export default function Profile() {
    return (
        <form className="m-20 mb-10">
    <div className="space-y-12">
      <div className="border-b border-gray-300 pb-12 grid grid-cols-12">
        <div className="col-span-4">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
        </div>
        <div className="col-span-8 col-start-6 col-end-12">
        <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
                <label for="photo" className="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                <div className="mt-2 flex items-center gap-x-3">
                  <svg className="h-20 w-20 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                  </svg>
                  <button type="button" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
                </div>
            </div>

          <div className="sm:col-span-4">
            <label for="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">SupremeThrifters.com/</span>
                <input type="text" name="username" id="username" autocomplete="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="RealKrazyWoman"></input>
              </div>
            </div>
          </div>
  
          <div className="col-span-full">
            <label for="about" className="block text-sm font-medium leading-6 text-gray-900">About</label>
            <div className="mt-2">
              <textarea id="about" name="about" rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
          </div>
  
          
  
          
        </div>
        </div>
      </div>
  
      <div className="border-b border-gray-900/10 pb-12 grid grid-cols-12">
        <div className="col-span-4">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
        </div>
        <div className="col-span-8 col-start-6 col-end-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
            <div className="mt-2">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
            </div>
          </div>
  
          <div className="sm:col-span-3">
            <label for="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
            <div className="mt-2">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
            </div>
          </div>
  
          <div className="sm:col-span-4">
            <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div className="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
            </div>
          </div>
  
          <div className="sm:col-span-3">
            <label for="country" className="block text-sm font-medium leading-6 text-gray-900">Area</label>
            <div className="mt-2">
              <select id="country" name="country" autocomplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
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
            <label for="street-address" className="block text-sm font-medium leading-6 text-gray-900">Street address</label>
            <div className="mt-2">
              <input type="text" name="street-address" id="street-address" autocomplete="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
            </div>
          </div>
  
          <div className="sm:col-span-2 sm:col-start-1">
            <label for="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
            <div className="mt-2">
              <input type="text" placeholder=" Singapore" name="city" id="city" autocomplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
            </div>
          </div>
  
          <div className="sm:col-span-2">
            <label for="region" className="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
            <div className="mt-2">
              <input type="text" name="region" id="region" autocomplete="address-level1" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder=" Singapore"></input>
            </div>
          </div>
  
          <div className="sm:col-span-2">
            <label for="postal-code" className="block text-sm font-medium leading-6 text-gray-900">Postal code</label>
            <div className="mt-2">
              <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
            </div>
          </div>
        </div>
        </div>
      </div>
     
  
      <div className="border-b border-gray-900/10 pb-12 grid grid-cols-12">
        <div className="col-span-4">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">We'll always let you know about important changes, but you pick what else you want to hear about.</p>
        </div>
        <div className="col-span-8 col-start-6 col-end-12">
        <div className="mt-10 space-y-10">
          <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">By Text</legend>
            <div className="mt-6 space-y-6">
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input id="comments" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"></input>
                </div>
                <div className="text-sm leading-6">
                  <label for="comments" className="font-medium text-gray-900">Listings</label>
                  <p className="text-gray-500">Get notified when someone near you makes a new listing.</p>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input id="candidates" name="candidates" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"></input>
                </div>
                <div className="text-sm leading-6">
                  <label for="candidates" className="font-medium text-gray-900">Following</label>
                  <p className="text-gray-500">Get notified when the person you follow lists an item.</p>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input id="offers" name="offers" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"></input>
                </div>
                <div className="text-sm leading-6">
                  <label for="offers" className="font-medium text-gray-900">Offers</label>
                  <p className="text-gray-500">Get notified when a someone gives you an offer.</p>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
            <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
            <div className="mt-6 space-y-6">
              <div className="flex items-center gap-x-3">
                <input id="push-everything" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"></input>
                <label for="push-everything" className="block text-sm font-medium leading-6 text-gray-900">Everything</label>
              </div>
              <div className="flex items-center gap-x-3">
                <input id="push-email" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"></input>
                <label for="push-email" className="block text-sm font-medium leading-6 text-gray-900">Same as email</label>
              </div>
              <div className="flex items-center gap-x-3">
                <input id="push-nothing" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"></input>
                <label for="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">No push notifications</label>
              </div>
            </div>
          </fieldset>
        </div>
        </div>
      </div>
    </div>
  
    <div className="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
      <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
    </div>
  </form>

    )
  }