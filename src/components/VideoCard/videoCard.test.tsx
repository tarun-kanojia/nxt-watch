import React from "react";
import { render, cleanup, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Video } from "../../model/Video";
import VideoCardListFixture from "../../fixtures/getVideoList.json";
import VideoCard from ".";
import { MemoryRouter } from "react-router";
import { getDuration } from "../../util/DateFunction";
import { resolve } from "path";
let videoItem: Video;
videoItem = new Video(VideoCardListFixture[0]);

describe("Unit Test for Video Card Rendering", () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <VideoCard videoItem={videoItem} />
            </MemoryRouter>
        );
    });

    it("[positive] should render Video thumbnail", () => {
        expect(screen.getByTestId("video-card-img")).toHaveAttribute(
            "src",
            videoItem.thumbnailUrl
        );
    });

    it("[positive] should render Video name", () => {
        expect(screen.getByText(videoItem.channel.name)).toBeInTheDocument();

        // expect(
        //     screen.getByText(getDuration(videoItem.publishedAt))
        // ).toBeInTheDocument();
    });

    it("[positive] should render Video Title", () => {
        expect(screen.getByText(videoItem.title)).toBeInTheDocument();
    });

    it("[positive] should render Video View count", () => {
        expect(
            screen.getByText(`${videoItem.viewCount} views`)
        ).toBeInTheDocument();
    });
});

