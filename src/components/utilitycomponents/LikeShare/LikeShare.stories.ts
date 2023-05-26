import { Meta, StoryObj } from "@storybook/react";
import {HandThumbUpIcon} from "@heroicons/react/24/outline"
import { Likes } from "../..";

const likes= {
    title: "Utilities/LikeShare",
    component: Likes,
    tags: ["autodocs"]
} satisfies Meta<typeof Likes>

type LikeShareStory = StoryObj<typeof likes>

export const Main: LikeShareStory = {
    args: {
        main: [
            {
                Icon: HandThumbUpIcon,
                type: "likes",
                num: 20,
                action: ()=> console.log("actions for likes")
            },
            {
                type: "share",
                action: ()=> console.log("Share Clicked")
            }
        ],
        donate: {
            type: "donate",
            action: ()=> console.log("Donate Clicked")
        }
    }
}

export default likes