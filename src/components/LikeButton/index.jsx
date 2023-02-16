import { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { api } from "../../utils/api";
import { useParams } from "react-router-dom";

library.add(faHeart);
library.add(faThumbsUp);

export function LikeButton({ likesCounter, setTabs, tabs }) {
  const params = useParams();
  const [hasLiked, setHasLiked] = useState(
    localStorage.getItem(`liked_${params.tabId}`) === "true"
  );

  function handleLikeClick() {
    const newLikesCounter = tabs.likesCounter + (hasLiked ? -1 : 1);
    const newTabs = { ...tabs, likesCounter: newLikesCounter };
    setTabs(newTabs);
    const infosForAPI = { data: newTabs };
    api.put(`/tabs/${params.tabId}`, infosForAPI);
    localStorage.setItem(`liked_${params.tabId}`, hasLiked ? "false" : "true");
    setHasLiked(!hasLiked);
  }

  console.log(tabs);
  return (
    <div className="flex items-center">
      <button className="rounded-full  p-2">
        <i
          className="fas fa-heart text-red-500"
          onClick={() => {
            handleLikeClick();
          }}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-thumbs-up"
            className={`fas fa-thumbs-up text-xl ${
              hasLiked ? "text-sky-500" : "text-gray-400"
            }`}
          />
        </i>
      </button>
      <span className="ml-2">{likesCounter} likes</span>
    </div>
  );
}
