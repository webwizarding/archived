import type { NextPage } from "next";
import axios from "axios"
import { useState, useEffect } from "react";
import toast from "react-hot-toast";




const Home: NextPage = () => {
    const [song, setSong] = useState("song")
    const [album, setAlbum] = useState("album")
    const [cover, setCover] = useState("https://community.spotify.com/t5/image/serverpage/image-id/55829iC2AD64ADB887E2A5/image-size/large?v=v2&px=999")
    const [artist, setArtist] = useState("artist")

    useEffect(() => {

        const getInfo = async () => {
            const res = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.LASTFM_USERNAME}&api_key=${process.env.API_KEY}&format=json`)


            setSong(res.data["recenttracks"]["track"][0]["name"])
            setArtist(res.data["recenttracks"]["track"][0]["artist"]["#text"])
            setAlbum(res.data["recenttracks"]["track"][0]["album"]["#text"])
            if (res.data["recenttracks"]["track"][0]["image"][0]["#text"] != "") {
                setCover(res.data["recenttracks"]["track"][0]["image"][3]["#text"])
            }
        }

        getInfo()
    }, [])

    return (
        <>
            <div className="h-[97vh] flex">
                <div className="m-auto w-full flex justify-center px-4">
                    <div className="bg-[#171717] p-6 rounded-lg w-full max-w-3xl shadow-xl border-2 border-zinc-700/25">
                        <div className="flex items-center gap-4">
                            <img src="https://cdn.discordapp.com/attachments/845065484315131924/1113620192728187040/e8b738af7704cabc515328360e4f05bb.png" alt="" className="rounded-full h-24 w-24" />
                            <div className="flex flex-col">
                                <div className="flex gap-2 items-center">

                                    <h1 className="text-2xl break-words max-w-md text-white">https</h1>
                                </div>

                            </div>
                        </div>

                        <div className="border-zinc-700/25 border-t-2 mt-4" />


                        <div className="rounded-lg p-2 border-2 border-zinc-700/50 mt-4 bg-[#202020] text-white">
                            Hi, Im a  fullstack coder.                             
                            I develop at MetaSec, SpectrumSec, QueerTech and Polysec. Trust me I didnt choose these names.
                        </div>

                        <div className="bg-dark-400 rounded p-2 border-zinc-700/50 border-2 mt-3">
                            <div className="flex items-center gap-2">
                                <div>
                                    <p className="text-sm text-white mb-2">Last listened to:</p>
                                    <div>
                                        <div className="flex gap-2">
                                            <img src={cover} alt="" className="w-12 h-12 rounded-lg" />
                                            <div className="flex flex-col">
                                                <h2 className="font-semibold text-gray-200">Clouded</h2>
                                                <p className="text-sm text-white/75"><span className="text-white/50">by</span> Brent Faiyaz <span className="text-white/50">on</span> Spotify</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>







                        <div className="flex mt-3 gap-4  pt-4 border-zinc-700/25 border-t-2 flex-wrap justify-center text-white" onClick={() => {
                            navigator.clipboard.writeText(`${process.env.DISCORD}`)
                            toast.success("Copied to clipboard!")
                        }}>
                            <div className="bg-dark-400 w-fit p-2 rounded-full shadow-md cursor-pointer hover:bg-dark-400/50 active:scale-110 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-discord h-6 w-6" viewBox="0 0 16 16">
                                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                                </svg>
                            </div>
                            <div className="bg-dark-400 w-fit p-2 rounded-full shadow-md cursor-pointer hover:bg-dark-400/50 active:scale-110 transition-all" onClick={() => {
                                window.open(process.env.GITHUB)
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github h-6 w-6" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </div>
                            <div className="bg-dark-400 w-fit p-2 rounded-full shadow-md cursor-pointer hover:bg-dark-400/50 active:scale-110 transition-all" onClick={() => {
                                window.open(process.env.TELEGRAM)
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telegram h-6 w-6" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                                </svg>
                            </div>


                        </div>

                    </div>
                </div>

            </div>

        </>
    )
};

export default Home;
