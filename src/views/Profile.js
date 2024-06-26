import { useState } from "react";
import { Tabs } from "@mui/base/Tabs";
import { TabsList } from "@mui/base/TabsList";
import { TabPanel } from "@mui/base/TabPanel";
import { Tab } from "@mui/base/Tab";

import profile from "../assets/styles/views/Profile.module.css";
import ProfileInfo from "../components/profile/ProfileInfo";
import Card from "../components/profile/ProductCard";

import etc from "../assets/images/svg/etc.svg";
import message from "../assets/images/svg/message.svg";
import plus from "../assets/images/svg/plus.svg";
import users from "../assets/images/svg/users.svg";

function Profile() {
  const [numCards, setNumCards] = useState(4);

  const generateArray = (length) => Array.from({ length }, (_, i) => i + 1);

  const renderCards = (type) => (
    <div className={profile.products}>
      {generateArray(numCards).map((index) => (
        <Card key={index} type={type} />
      ))}
    </div>
  );

  return (
    <div className={profile.profile}>
      <ProfileInfo />
      <div className={`flex-wrap ${profile.button_container}`}>
        <button className={`blue-btn btn ${profile.mw_140}`}>
          <img src={plus} alt="icon" />
          Subscribe
        </button>
        <button className={`secondary-btn-black btn ${profile.mw_140}`}>
          <img src={users} alt="icon" />
          Following
        </button>
        <button className={`secondary-btn-black btn ${profile.mw_140}`}>
          <img src={message} alt="icon" />
          Message
        </button>
        <button className={`secondary-btn-black btn ${profile.mw_46}`}>
          <img src={etc} alt="icon" />
        </button>
      </div>
      <Tabs defaultValue={1}>
        <TabsList className={profile.tabslist}>
          <Tab className={profile.tab} value={1}>
            All
          </Tab>
          <Tab className={profile.tab} value={2}>
            Collections
          </Tab>
        </TabsList>
        <TabPanel value={1}>
          {renderCards()}
          {renderCards("collection")}
        </TabPanel>
        <TabPanel value={2}>
          {renderCards("collection")}
        </TabPanel>
      </Tabs>
      <button
        className="btn lightBlue-btn"
        onClick={() => setNumCards(numCards + 4)}
      >
        Load More
      </button>
    </div>
  );
}

export default Profile;
