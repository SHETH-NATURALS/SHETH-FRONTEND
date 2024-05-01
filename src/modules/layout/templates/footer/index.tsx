import { Text, clx } from "@medusajs/ui"

// Icon imports
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RedditIcon from '@mui/icons-material/Reddit';
import FacebookIcon from "../../../../assets/FacebookIcon"
import TiktokIcon from "../../../../assets/TiktokIcon"
import BunnyIcon from "../../../../assets/BunnyIcon"
import BulbIcon from "../../../../assets/BulbIcon"
import GlutenIcon from "../../../../assets/GlutenIcon"
import IngredientIcon from "../../../../assets/IngredientIcon"

import { format } from "date-fns"


import { getCategoriesList, getCollectionsList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="border-t w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex justify-between bg-primary-25 px-28 py-8">
          <div className="text-primary-600 flex gap-5">
            <BunnyIcon/>
            <p>No Test On Animals</p>
          </div>
          <div className="text-primary-600 flex gap-5">
            <IngredientIcon/>
            <p>No Animal Derived Ingredients</p>
          </div>
          <div className="text-primary-600 flex gap-5">
            <GlutenIcon/>
            <p>No Gluten, Or Gluten Byproducts</p>
          </div>
          <div className="text-primary-600 flex gap-5">
            <BulbIcon/>
            <p>Recyclable Packaging</p>
          </div>
        </div>
        <div className="flex gap-32 bg-primary text-white px-28 py-20 font-extralight">
          <div>
            <h3 className="text-2xl font-semibold mb-6">How Can We Help?</h3>
            <ul className="flex flex-col gap-3">
              <li>Sheth Branches</li>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Our Brand</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Products</h3>
            <ul className="flex flex-col gap-3">
              <li>Women Make Up</li>
              <li>Women Skincare</li>
              <li>Gifts & Sets</li>
            </ul>
          </div>
          <div className="w-[600px]">
            <h3 className="text-2xl font-semibold mb-6">Keep in Touch With Sheth</h3>
            <p>Join The Sheth Newsletter And Be The First To Hear About News, Offers And Skincare Advice</p>
            <form action="" className="flex gap-6 flex-wrap">
              <input className="w-3/4 bg-transparent border-b-2 border-gray-400 focus:outline-none" type="email" placeholder="Email Address" />
              <button className="p-3 border-2 border-gray-400" type="submit">Subscribe</button>
              <input className="bg-transparent border-2 border-white" type="checkbox" id="check"/>
              <label htmlFor="check">By Submitting Your Email, You Agree To Advertising Emails From Sheth. Please Review Our Privacy Policy Whoch Includes Our Financial Incetive Notice For CA Residents. </label>
            </form>
          </div>
        </div>
        <div className="text-xs text-primary justify-between p-5 px-28 flex">
          <div className="flex gap-3">
            <LocationOnOutlinedIcon />
            <p className="text-black">Sheth HQ, Lunga Lunga Rd</p>
            <span className="text-primary">|</span>
            <LocalPhoneOutlinedIcon />
            <p className="text-black">1-802-526-2463</p>
          </div>
          <div className="flex gap-5">
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
            <PinterestIcon />
            <RedditIcon />
            <TiktokIcon />
          </div>
        </div>
        <div className="flex w-full justify-between text-white bg-black p-5 text-sm px-28">
          <p>
            © {format(new Date(), 'yyyy')} Sheth. All rights reserved.
          </p>
          <div className="flex gap-4">
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
