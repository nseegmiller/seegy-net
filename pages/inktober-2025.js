import Image from 'next/image'
import Head from 'next/head'

import Footer from '@components/Footer'
import Header from '@components/Header'

import day1 from '../assets/inktober-2025/day-1-axon-logo.png'
import day2 from '../assets/inktober-2025/day-2-hornet.png'
import day3 from '../assets/inktober-2025/day-3-sherma.png'
import day4 from '../assets/inktober-2025/day-4-lace.png'
import day5 from '../assets/inktober-2025/day-5-homestar.png'
import day6 from '../assets/inktober-2025/day-6-strongbad.png'
import day7 from '../assets/inktober-2025/day-7-trogdor.png'
import day8 from '../assets/inktober-2025/day-8-johanna-shield.png'
import day9 from '../assets/inktober-2025/day-9-hollow-knight-wanderer.png'
import day10 from '../assets/inktober-2025/day-10-shakra.png'
import day11 from '../assets/inktober-2025/day-11-flea.png'
import day12 from '../assets/inktober-2025/day-12-sly.png'
import day13 from '../assets/inktober-2025/day-13-mr-mushroom.png'
import day14 from '../assets/inktober-2025/day-14-panda.png'
import day15 from '../assets/inktober-2025/day-15-baseball.png'
import day16 from '../assets/inktober-2025/day-16-mariners.png'
import day17 from '../assets/inktober-2025/day-17-gmail.png'
import day18 from '../assets/inktober-2025/day-18-cry.png'
import day19 from '../assets/inktober-2025/day-19-birthday-composition.png'
import day20 from '../assets/inktober-2025/day-20-dithering-rainbow.gif'
import day21 from '../assets/inktober-2025/day-21-snes.png'
import day22 from '../assets/inktober-2025/day-22-freehand-pumpkin-pie.png'
import day23 from '../assets/inktober-2025/day-23-clock.gif'
import day24 from '../assets/inktober-2025/day-24-loading.gif'
import day25 from '../assets/inktober-2025/day-25-all-helmets.gif'
import day26 from '../assets/inktober-2025/day-26-sugar-skull.png'
import day27 from '../assets/inktober-2025/day-27-whirligig.png'
import day28 from '../assets/inktober-2025/day-28-nice.gif'
import day29 from '../assets/inktober-2025/day-29-peak.png'
import day30 from '../assets/inktober-2025/day-30-godseeker.png'
import day31 from '../assets/inktober-2025/day-31-homer.png'

export default function Inktober2025() {
    return (
        <div className="container">
            <Header />
            <Head>
                <meta property="og:image" content="/day-31-homer.png" />
            </Head>
            <main>
                <h1>Inktober 2025</h1>
                <p>In October of 2025, I participated in a slightly modified version of Inktober where I created a new piece of pixel art for every day in the month.
                    I didn't always complete it on the day itself, but I did complete all 31 pieces during the month. Below is a gallery of all the pieces along with
                    the palette used and a short description of each piece. Most were created via tracing a reference layer in Aseprite to help me learn pixel art techniques,
                    with some freehand elements as noted.
                </p>
                <table>
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Image</th>
                            <th className="left-cell">Size</th>
                            <th className="left-cell">Palette</th>
                            <th className="left-cell">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td className="image-cell"><Image src={day1} unoptimized alt="Inktober 2025 Day 1" /></td>
                            <td>32 x 32</td>
                            <td>Aseprite default</td>
                            <td>The logo of the company I current work for, Axon. Created via reference tracing.</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td className="image-cell"><Image src={day2} unoptimized alt="Inktober 2025 Day 2" /></td>
                            <td>51 x 61</td>
                            <td>AAP-64</td>
                            <td>Hornet from Silksong. Created via reference tracing.</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td className="image-cell"><Image src={day3} unoptimized alt="Inktober 2025 Day 3" /></td>
                            <td>64 x 64</td>
                            <td>AAP-Slendor128</td>
                            <td>Sherma from Silksong. Created via reference tracing.</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td className="image-cell"><Image src={day4} unoptimized alt="Inktober 2025 Day 4" /></td>
                            <td>64 x 64</td>
                            <td>A64</td>
                            <td>Lace from Silksong. Created via reference tracing.</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td className="image-cell"><Image src={day5} unoptimized alt="Inktober 2025 Day 5" /></td>
                            <td>32 x 64</td>
                            <td>AAP-64</td>
                            <td>Homestar Runner. Created via reference tracing. Background freehand.</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td className="image-cell"><Image src={day6} unoptimized alt="Inktober 2025 Day 6" /></td>
                            <td>39 x 32</td>
                            <td>AAP-64</td>
                            <td>Strongbad. Created via reference tracing. Background freehand.</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td className="image-cell"><Image src={day7} unoptimized alt="Inktober 2025 Day 7" /></td>
                            <td>64 x 53</td>
                            <td>AAP-64</td>
                            <td>Trogdor. Character created via reference tracing. Text freehand.</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td className="image-cell"><Image src={day8} unoptimized alt="Inktober 2025 Day 8" /></td>
                            <td>48 x 64</td>
                            <td>AAP-Splendor128</td>
                            <td>Johanna's shield. Created via reference tracing. Background freehand.</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td className="image-cell"><Image src={day9} unoptimized alt="Inktober 2025 Day 9" /></td>
                            <td>64 x 64</td>
                            <td>AAP-64</td>
                            <td>Knight from Hollow Knight. Created via reference tracing. Background freehand.</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td className="image-cell"><Image src={day10} unoptimized alt="Inktober 2025 Day 10" /></td>
                            <td>32 x 64</td>
                            <td>AAP-64</td>
                            <td>Shakra from Silksong. Created via reference tracing. Background freehand.</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td className="image-cell"><Image src={day11} unoptimized alt="Inktober 2025 Day 11" /></td>
                            <td>64 x 64</td>
                            <td>AAP-Splendor128</td>
                            <td>Flea from Silksong. Created via reference tracing. Background freehand.</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td className="image-cell"><Image src={day12} unoptimized alt="Inktober 2025 Day 12" /></td>
                            <td>64 x 64</td>
                            <td>AAP-64</td>
                            <td>Sly from Hollow Knight. Created via reference tracing. Background freehand.</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td className="image-cell"><Image src={day13} unoptimized alt="Inktober 2025 Day 13" /></td>
                            <td>64 x 64</td>
                            <td>AAP-64</td>
                            <td>Mr Mushroom from Hollow Knight & Silksong. Created via reference tracing. Background freehand.</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td className="image-cell"><Image src={day14} unoptimized alt="Inktober 2025 Day 14" /></td>
                            <td>64 x 64</td>
                            <td>AAP-64</td>
                            <td>Panda. Created via reference tracing. Background freehand.</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td className="image-cell"><Image src={day15} unoptimized alt="Inktober 2025 Day 15" /></td>
                            <td>64 x 64</td>
                            <td>AAP-Splender128</td>
                            <td>Baseball, mitt, and ball. Created via reference tracing then recomposited. Background freehand.</td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td className="image-cell"><Image src={day16} unoptimized alt="Inktober 2025 Day 16" /></td>
                            <td>64 x 64</td>
                            <td>AAP-64</td>
                            <td>Mariners Logo. Created via reference tracing.</td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td className="image-cell"><Image src={day17} unoptimized alt="Inktober 2025 Day 17" /></td>
                            <td>32 x 32</td>
                            <td>AAP-64</td>
                            <td>Gmail logo. Created via reference tracing with modifications for a basic exploration of dithering.</td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td className="image-cell"><Image src={day18} unoptimized alt="Inktober 2025 Day 18" /></td>
                            <td>32 x 32</td>
                            <td>AAP-64</td>
                            <td>Crying emoji. Created via reference tracing.</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td className="image-cell"><Image src={day19} unoptimized alt="Inktober 2025 Day 19" /></td>
                            <td>32 x 32</td>
                            <td>Custom palette from a Link to the Past</td>
                            <td>Composition for my 43rd birthday made by combining elements from the game.</td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td className="image-cell"><Image src={day20} unoptimized alt="Inktober 2025 Day 20" /></td>
                            <td>63 x 64</td>
                            <td>NES</td>
                            <td>Rainbow animation created freehand to explore dithering and animation.</td>
                        </tr>
                        <tr>
                            <td>21</td>
                            <td className="image-cell"><Image src={day21} unoptimized alt="Inktober 2025 Day 21" /></td>
                            <td>96 x 64</td>
                            <td>AAP-Splendor128</td>
                            <td>SNES game controller. Created via reference tracing with modifications for the text.</td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td className="image-cell"><Image src={day22} unoptimized alt="Inktober 2025 Day 22" /></td>
                            <td>32 x 32</td>
                            <td>AAP-64</td>
                            <td>Pumpkin pie. Made entirely freehand.</td>
                        </tr>
                        <tr>
                            <td>23</td>
                            <td className="image-cell"><Image src={day23} unoptimized alt="Inktober 2025 Day 23" /></td>
                            <td>64 x 64</td>
                            <td>AAP-64</td>
                            <td>Classic alarm clock. Created via reference tracing. Background freehand.</td>
                        </tr>
                        <tr>
                            <td>24</td>
                            <td className="image-cell"><Image src={day24} unoptimized alt="Inktober 2025 Day 24" /></td>
                            <td>96 x 32</td>
                            <td>Full RGB color</td>
                            <td>Loading animation. Created by compositing elements from a Cyangmou HUD asset pack. Text freehand copied from a pixel art font.</td>
                        </tr>
                        <tr>
                            <td>25</td>
                            <td className="image-cell"><Image src={day25} unoptimized alt="Inktober 2025 Day 25" /></td>
                            <td>64 x 64</td>
                            <td>Full RGB color</td>
                            <td>Animation with a set of steampunk helmets. Background is made of color shifted and composited elements from a Cyangmou asset pack.
                                Helmets from a different Cyangmou asset pack.</td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td className="image-cell"><Image src={day26} unoptimized alt="Inktober 2025 Day 26" /></td>
                            <td>64 x 64</td>
                            <td>AAP-64</td>
                            <td>Sugar skull. Created via reference tracing. Background freehand.</td>
                        </tr>
                        <tr>
                            <td>27</td>
                            <td className="image-cell"><Image src={day27} unoptimized alt="Inktober 2025 Day 27" /></td>
                            <td>64 x 128</td>
                            <td>AAP-Splendor128</td>
                            <td>Whirligig from Bloodborne. Created via reference tracing. Background freehand.</td>
                        </tr>
                        <tr>
                            <td>28</td>
                            <td className="image-cell"><Image src={day28} unoptimized alt="Inktober 2025 Day 28" /></td>
                            <td>62 x 31</td>
                            <td>Full RGB color</td>
                            <td>Neon Nice. Text created via reference tracing. Bricks and outlined were freehand based on a reference image. Small exploration into transparency.</td>
                        </tr>
                        <tr>
                            <td>29</td>
                            <td className="image-cell"><Image src={day29} unoptimized alt="Inktober 2025 Day 29" /></td>
                            <td>64 x 64</td>
                            <td>Full RGB color</td>
                            <td>Character from the game Peak. Created via reference tracing. Background freehand.</td>
                        </tr>
                        <tr>
                            <td>30</td>
                            <td className="image-cell"><Image src={day30} unoptimized alt="Inktober 2025 Day 30" /></td>
                            <td>32 x 96</td>
                            <td>Full RGB color</td>
                            <td>Godseeker from Hollow Knight. Created via reference tracing. Background freehand.</td>
                        </tr>
                        <tr>
                            <td>31</td>
                            <td className="image-cell"><Image src={day31} unoptimized alt="Inktober 2025 Day 31" /></td>
                            <td>64 x 128</td>
                            <td>Full RGB color</td>
                            <td>Homer Simpson. Created via reference tracing. Background freehand.</td>
                        </tr>
                    </tbody>
                </table>

            </main>
            <Footer />
        </div>
    )
}
