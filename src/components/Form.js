import React from 'react'

export default function Form() {
  return (
        
        <div>
    <ul class="flex flex-wrap list-none pl-0  border border-t-0 border-r-0 border-l-0 border-b-1 border-gray-200 mb-1 " id="pills-tab" role="tablist">
      <li class="" role="presentation">
        <button class="inline-block py-2 px-4 no-underline active bg-black  text-white" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
            <svg width="30" height="30" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M29.998 10c12.15 0 21.999 9.822 21.999 21.938 0 1.52-.155 3.004-.45 4.437 4.384 3.653 6.436 6.836 5.49 9.113-1.063 2.553-5.399 3.235-12.217 2.355l.29.036a21.955 21.955 0 01-15.112 5.996C17.85 53.875 8 44.053 8 31.937 8 19.822 17.849 10 29.998 10zm0 1.489c-11.324 0-20.505 9.155-20.505 20.448 0 11.294 9.18 20.45 20.505 20.45 9.588 0 17.639-6.563 19.883-15.428-2.97-2.366-6.976-5-11.81-7.685a.743.743 0 01-.29-1.013.748.748 0 011.016-.288c4.575 2.542 8.437 5.024 11.427 7.341.184-1.098.28-2.226.28-3.377 0-11.293-9.18-20.448-20.506-20.448zM51.145 38l-.062.212a21.885 21.885 0 01-4.658 8.316c5.321.53 8.603-.098 9.232-1.612.613-1.474-1.043-3.94-4.512-6.916zM30.73 14.857l-7.526 5.077-4.534-1.598c-1.003-.423-2.208.08-2.642 1.127l-.05.132a2.07 2.07 0 001.158 2.565l4.526 1.595 1.746 8.91c.047.24.211.44.437.534l2.485 1.022.065.019.074.014.118.006.044-.003.135-.025.365-.24.662-7.701 3.353 1.384 1.172 1.561c.07.093.161.169.266.22l3.572 1.73c.623.262 1.28-.308 1.016-.95l-1.133-2.765 2.803-1.198.04-.024c.036-.022.036-.022.132-.108l.037-.042.101-.163-.043-.685-3.366-1.439-.084-.026a.731.731 0 00-.175-.021h-2.87l-3.233-1.292 4.731-5.506a.731.731 0 00-.269-1.15l-2.418-1.027a.731.731 0 00-.695.067zm.488 1.433l1.133.482-4.746 5.525a.731.731 0 00.284 1.156l4.313 1.722.088.029c.06.015.12.023.183.023h2.878l1.18.448-1.727.73a.731.731 0 00-.392.951l.695 1.697-1.727-.836-1.183-1.579a.731.731 0 00-.305-.237l-4.463-1.843-.087-.03a.731.731 0 00-.922.655l-.514 7.288-1.139-.473-1.75-8.934a.731.731 0 00-.475-.549l-4.881-1.72c-.261-.11-.407-.466-.281-.774a.59.59 0 01.682-.348l5.004 1.763c.219.077.46.046.652-.084l7.5-5.062z" fill="currentColor" fill-rule="nonzero"></path>
                                        </svg>
    
            
            Holidays</button>
      </li>
      <li class="" role="presentation">
        <button class="inline-block py-2 px-4 no-underline bg-black  text-white" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
            <svg width="30" height="30" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.06 38.688l-.211-.438c-1.776-3.694-3.145-6.902-4.033-9.545-.937.631-2.156.938-3.632.938-3.74 0-6.573-2.824-6.573-6.554 0-3.73 2.833-6.555 6.573-6.555 1.459 0 2.665.3 3.598.915a15.515 15.515 0 014.052-5.625c-2.35-1.35-5.086-2.16-7.65-2.16-7.33 0-13.518 6.168-13.518 13.474 0 2.648 1.845 7.72 5.053 14.392a179.966 179.966 0 002.03 4.082 258.138 258.138 0 004.918 9.11c.543.961 1.05 1.846 1.51 2.638.5-.878 1.053-1.861 1.648-2.93a331.399 331.399 0 005.198-9.7 244.847 244.847 0 001.037-2.042zm.921 1.87c-.157.309-.315.62-.476.932a333.028 333.028 0 01-5.224 9.749 339.682 339.682 0 01-2.376 4.2.833.833 0 01-1.437.007 258.955 258.955 0 01-2.252-3.906 259.77 259.77 0 01-4.949-9.17c-.725-1.413-1.41-2.79-2.05-4.12C9.894 31.34 8 26.132 8 23.138 8 14.912 14.934 8 23.184 8c3.084 0 6.338 1.03 9.052 2.724C34.693 9.012 37.658 8 40.816 8 49.206 8 56 14.64 56 23.138c0 3.086-1.83 8.221-5.047 14.935a167.944 167.944 0 01-2.221 4.453 240.89 240.89 0 01-4.95 9.076 238.193 238.193 0 01-2.254 3.85.833.833 0 01-1.428-.006 258.955 258.955 0 01-2.252-3.906 259.77 259.77 0 01-4.95-9.17c-.313-.61-.619-1.215-.917-1.812zM26.201 19.1c-.65-.592-1.642-.902-3.017-.902-2.82 0-4.907 2.08-4.907 4.89 0 2.81 2.086 4.891 4.907 4.891 1.436 0 2.455-.339 3.102-.983-.43-1.534-.654-2.827-.654-3.858 0-1.393.198-2.748.569-4.038zm-3.017 42.117a.832.832 0 110-1.664h17.632a.832.832 0 110 1.664H23.184zm19.151-10.442a239.257 239.257 0 004.916-9.011c.783-1.517 1.519-2.99 2.2-4.41 3.106-6.483 4.883-11.47 4.883-14.216 0-7.57-6.04-13.474-13.518-13.474-7.331 0-13.519 6.168-13.519 13.474 0 2.648 1.845 7.72 5.054 14.392a179.966 179.966 0 002.03 4.082 258.138 258.138 0 004.918 9.11c.548.97 1.06 1.863 1.522 2.66.461-.781.97-1.655 1.514-2.607zm-1.52-21.132c-3.63 0-6.573-2.934-6.573-6.554s2.944-6.555 6.574-6.555 6.573 2.934 6.573 6.555c0 3.62-2.943 6.554-6.573 6.554zm0-1.664c2.712 0 4.908-2.19 4.908-4.89 0-2.7-2.196-4.89-4.907-4.89s-4.908 2.19-4.908 4.89c0 2.7 2.197 4.89 4.908 4.89z" fill="currentColor" fill-rule="nonzero"></path></svg>
            Multicenter</button>
      </li>
    </ul>
    
    <div class="tab-content container text-white bg-#000" id="pills-tabContent">
      <div class="tab-pane opacity-100 block active " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
          <form class="flex flex-wrap   gy-1 gx-2 items-center fluid-container" action="https://myteletextholidays.co.uk/serp">
      
      <div class="col-auto">
        <label class="visually" for="autoSizingSelect">Destinations</label>
        <select class="form-select" id="autoSizingSelect">
          <option selected>Destination</option>
          <option value="1">Dubai</option>
          <option value="2">Maldives</option>
          <option value="3">Goa</option>
        </select>
      </div>
      <div class="col-auto">
        <label class="visually" for="autoSizingSelect">Depature Airport</label>
        <select class="form-select" id="autoSizingSelect">
          <option selected>Depature Airport</option>
          <option value="1">London</option>
          <option value="2">Liverpool</option>
          <option value="3">Dublin</option>
        </select>
      </div>
      
         
        <div class="col-auto">
            <label class="visually" for="autoSizingSelect">When</label>
        <input type="date" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="date" aria-label="Date"/>
      </div>
      
      <div class="col-auto">
              <label class="visually" for="autoSizingSelect">How Long</label>
        <select class="form-select" id="autoSizingSelect">
          <option selected>1 nights</option>
          <option value="1">2 nights</option>
          <option value="2">3 nights</option>
          <option value="3">4 nights</option>
        </select>
      </div>
      <div class="col-auto">
          <label class="visually" for="autoSizingSelect">No. of Guests/ Rooms</label>
        <input type="text" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="Guests/Rooms" aria-label="date"/>
      </div>
      <div class="relative flex-grow max-w-full flex-1 px-4">
          <label class="visually" for="autoSizingSelect">No. of rooms</label>
        <input type="text" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="Rooms" aria-label="date"/>
      </div>
      <div class="w-1/5 mb">
        <button  type="submit" class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600">Get Holidays</button>
      </div>
    </form>
    
          
          
      </div>
      <div class="tab-pane opacity-0" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
           <form class="flex flex-wrap  gy-2 gx-3 items-center fluid-container" action="https://myteletextholidays.co.uk/serp">
      
      <div class="col-auto">
        <label class="visually" for="autoSizingSelect">Destinations</label>
        <select class="form-select" id="autoSizingSelect">
          <option selected>Destination</option>
          <option value="1">Indian Ocean</option>
          <option value="2">USA</option>
          <option value="3">Florida</option>
        </select>
      </div>
      <div class="col-auto">
        <label class="visually" for="autoSizingSelect">Depature Airport</label>
        <select class="form-select" id="autoSizingSelect">
          <option selected>Depature Airport</option>
          <option value="1">London</option>
          <option value="2">Liverpool</option>
          <option value="3">Dublin</option>
        </select>
      </div>
      
         
        <div class="col-auto">
            <label class="visually" for="autoSizingSelect">Depature Date</label>
        <input type="date" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="date" aria-label="date"/>
      </div>
      
      <div class="col-auto">
          <label class="visually" for="autoSizingSelect">Return Date</label>
        <input type="date" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="Date" aria-label="date"/>
      </div>
      <div class="col-auto">
          <label class="visually" for="autoSizingSelect">No. of Guests / Rooms</label>
        <input type="text" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="Guests/Rooms" aria-label="date"/>
      </div>
      <div class="relative flex-grow max-w-full flex-1 px-4">
          <label class="visually" for="autoSizingSelect">No. of rooms</label>
        <input type="text" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="Rooms" aria-label="date"/>
      </div>
      <div class="w-1/5 mb">
        <button type="submit" class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600">Get Destinations</button>
      </div>
    
      </form>
    </div>
    </div>
    </div>
    
  );
}