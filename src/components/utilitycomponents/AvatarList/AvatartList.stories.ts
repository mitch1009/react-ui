import { Meta, StoryObj } from "@storybook/react";
import {Avatars} from "./AvatarList"
const avatar = {
    component: Avatars,
    tags: ['autodocs'],
    title: "Utilities/AvatarList"
} satisfies Meta<typeof Avatars>

export default avatar

type AvatarStory = StoryObj<typeof avatar>

export const Main: AvatarStory = {
    args: {
        title: "Others engaged",
        num: 40,
        data: [
            {imageURL:'https://via.placeholder.com/150/771796'},
        
            {imageURL:     'https://via.placeholder.com/150/24f355', name: "Mitch"},
            {
                imageURL: 'https://via.placeholder.com/150/d32776',
                name: "Chanza"
            }
           
        ]

    }
}