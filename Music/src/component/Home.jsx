// import 'font-awesome/css/font-awesome.min.css'; 
import { FaPlayCircle } from "react-icons/fa";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { FaShuffle } from "react-icons/fa6";
import { MdRepeatOn } from "react-icons/md";
import { FaVolumeHigh } from "react-icons/fa6";

function MusicPlayer() {
    return (
        <div className="player h-[95vh]  flex flex-col items-center justify-center  transition-colors duration-500 ">
            {/* Details Section */}
            <div className="details flex flex-col items-center justify-center mt-6 border p-4 sm:p-6 rounded-lg shadow-2xl bg-emerald-500 w-[90vw] sm:w-[50vw] md:w-[30vw] lg:w-[40vw] h-auto sm:h-[70vh]">
                <div className="now-playing text-xs sm:text-sm font-bold">PLAYING x OF y</div>
                <div className="track-art my-4 sm:my-6 h-[150px] sm:h-[250px] w-[150px] sm:w-[250px] bg-cover bg-center rounded-[15%]">
                    <img className="rounded-full shadow-2xl" src="image_1.webp" alt="Album Art" />
                </div>
                <div className="track-name text-2xl sm:text-3xl">Track Name</div>
                <div className="track-artist text-lg sm:text-xl">Track Artist</div>
                {/* Control Buttons Section */}
                <div className="buttons flex flex-row items-center mt-4 space-x-4">
                    <div className="shuffle-track p-4 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                        <i className="fa fa-random fa-2x"></i> {/* Shuffle Button */}
                        <FaShuffle />
                    </div>
                    <div className="prev-track p-4 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                        <i className="fa fa-step-backward fa-2x"></i> {/* Previous Track */}
                        <MdSkipPrevious className="w-[25px] h-[25px]" />
                    </div>
                    <div className="playpause-track p-4 opacity-80 hover:opacity-100 transition-opacity cursor-pointer  ">
                        <i className="fa fa-play-circle fa-4x"></i> {/* Play/Pause */}
                        <FaPlayCircle className=" w-[25px] h-[25px]" />
                    </div>
                    <div className="next-track p-4 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                        <i className="fa fa-step-forward fa-2x"></i> {/* Next Track */}
                        <MdSkipNext className="w-[25px] h-[25px]" />
                    </div>
                    <div className="repeat-track p-4 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                        <i className="fa fa-redo fa-2x"></i> {/* Repeat Button */}
                        <MdRepeatOn />
                    </div>
                </div>
                {/* Seek Slider Section */}
                <div className="slider_container flex justify-center items-center w-[75%] max-w-[400px] mt-4">
                    <div className="current-time px-2">00:00</div>
                    <input
                        type="range"
                        min="1"
                        max="100"
                        value="0"
                        className="seek_slider w-[60%] h-[5px] bg-black opacity-70 transition-opacity duration-200"
                    />
                    <div className="total-duration px-2">00:00</div>
                </div>
                {/* Volume Slider Section */}
            <div className="slider_container flex justify-center items-center w-[75%] max-w-[400px] mt-4">
                <i className="fa fa-volume-down px-2"></i>
                <input
                    type="range"
                    min="1"
                    max="100"
                    value="99"
                    className="volume_slider w-[30%] h-[5px] bg-black opacity-70 transition-opacity duration-200"
                />
                <i className="fa fa-volume-up px-2"></i>
                <FaVolumeHigh />
            </div>
            </div>
        </div>
    );
}

export default MusicPlayer;
