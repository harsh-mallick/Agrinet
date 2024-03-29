import { React } from 'react'
import '../../Css/common/Home.css'
import { useTranslation } from 'react-i18next';
import Wholesale from "../../Images/Wholesale.jpg"
import Farmer from "../../Images/Farmer.jpg"
import Transporter from "../../Images/Transpoter.jpg"
import Information from "../../Images/information.png"
const Home = () => {
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);

    // const [scrollt, setScrollt] = useState()
    // window.addEventListener("scroll", () => {
    //     const verticalScrollPx = window.scrollY || window.pageYOffset;
    //     console.log(verticalScrollPx)
    //     if (verticalScrollPx < 3) {
    //         setScrollt(1)
    //         console.log(scrollt)
    //     } else {
    //         setScrollt(0)
    //     }
    // })
    // if (scrollt === 1) {
    //     document.getElementById("html").style.overflowY = "hidden";
    //     document.getElementById("main").style.scale = "100px"

    // } else {
    //     document.body.style.overflowY = "scroll"
    // }

    const { t } = useTranslation();

    // const [user, setUser] = useState({
    //     cname: "",
    //     cemail: "",
    //     cmessage: "",
    // });

    // let name, value;
    // const handleInput = (e) => {
    //     console.log(e)
    //     name = e.target.name;
    //     value = e.target.value;
    //     setUser({ ...user, [name]: value })
    // }


    // const email = async (e) => {
    //     e.preventDefault();
    //     const { cname, cemail, cmessage } = user

    //     const res = await fetch("/sendEmail", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             cname, cemail, cmessage
    //         })
    //     });
    //     const data = await res.json();
    //     console.log(data)
    //     console.log(res.status)
    //     if (res.status === 422 || res.status === 404 || !data) {

    //         window.alert("Cannot send message")
    //         console.log("Cannot send message")

    //     } else if (res.status === 500) {
    //         window.alert("Internal Server Error")
    //         console.log("Internal Server Error")
    //     } else {
    //         window.alert("Message sent Successfully");
    //         console.log("Message sent Successfully");
    //         setUser("")
    //     };
    // }
    if (window.localStorage.getItem("homereload") === "true") {
        window.location.reload()
        window.localStorage.setItem("homereload", "flase")
    }

    window.localStorage.setItem("visited", "flase")
    const payloadfalse = () => {
        if (window.localStorage.getItem("visited") === "false") {
            window.localStorage.setItem("payload", "false")
            window.localStorage.setItem("visited", "true")
            window.location.reload()
        }
    }
    window.addEventListener("load", payloadfalse)
    // window.addEventListener("scroll", setScrollVar)
    // window.addEventListener("resize", setScrollVar)
    // function setScrollVar() {
    //     const htmlElement = document.documentElement
    //     const percentofscreenheightScrolled = htmlElement.scrollTop / htmlElement.clientHeight
    //     console.log(Math.min(percentofscreenheightScrolled * 100, 129))
    //     htmlElement.style.setProperty("--scroll", Math.min(percentofscreenheightScrolled * 100, 100))
    //     if (Math.min(percentofscreenheightScrolled * 100, 129) > 5 && Math.min(percentofscreenheightScrolled * 100, 129) < 8) {
    //         document.getElementById("main-1").style.transform = "scale(1.08)"
    //     }
    //     if (Math.min(percentofscreenheightScrolled * 100, 129) > 8 && Math.min(percentofscreenheightScrolled * 100, 129) < 11) {
    //         document.getElementById("main-1").style.transform = "scale(1.05)"
    //     }
    //     if (Math.min(percentofscreenheightScrolled * 100, 129) > 11 && Math.min(percentofscreenheightScrolled * 100, 129) < 14) {
    //         document.getElementById("main-1").style.transform = "scale(1.02)"
    //     }
    //     if (Math.min(percentofscreenheightScrolled * 100, 129) > 14 && Math.min(percentofscreenheightScrolled * 100, 129) < 17) {
    //         document.getElementById("main-1").style.transform = "scale(1.0)"
    //     }
    //     if (Math.min(percentofscreenheightScrolled * 100, 129) > 17 && Math.min(percentofscreenheightScrolled * 100, 129) < 26) {
    //         document.getElementById("main-1").style.transform = "scale(0.94)"
    //     }
    // }
    // setScrollVar()





    return (
        <>
            <div className="main" style={{ height: "681px", overflow: "hidden" }}>
                <div className="bg">
                    <div className="HomeText">
                        <h2 className="Agrinet">AGRINET</h2>
                        <p className="Topic-Slogan">Digitalize you farm… <br /> Harvest Success !!</p>
                        <div className="wrapper">
                            <a href="#cardpanel"><div className="btn">
                                <p>Get Started</p>
                                <span className="BorderTopBottom"></span>
                                <span className="BorderLeftRight"></span>
                            </div></a>
                        </div>
                    </div>
                    <svg className="image-logo" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.00 0.00 802.00 680.00">
                        <g strokeWidth="2.00" fill="none" strokeLinecap="butt">
                            <path stroke="#8bee2d" vectorEffect="non-scaling-stroke" d="
      M 408.08 10.41
      Q 403.21 13.76 401.58 19.53
      C 398.86 29.10 399.22 38.78 399.02 50.00
      Q 398.69 68.22 395.84 114.49
      C 395.72 116.40 395.37 120.97 393.45 121.80
      A 2.01 2.00 -32.3 0 1 391.15 121.29
      C 387.08 116.70 384.59 110.30 381.91 106.35
      Q 372.21 92.06 357.12 83.76
      C 356.02 83.16 355.07 83.09 353.86 82.99" />
                            <path stroke="#53e341" vectorEffect="non-scaling-stroke" d="
      M 442.84 74.53
      Q 443.02 75.18 442.63 75.58
      Q 442.26 75.96 442.22 76.02
      Q 422.42 104.19 402.53 132.30
      Q 400.61 135.02 400.45 136.24
      C 399.46 143.92 398.29 150.58 391.31 155.12
      C 373.68 166.57 357.20 178.87 342.90 194.39
      Q 333.69 204.39 319.38 211.03
      C 318.41 211.48 317.73 211.25 317.06 210.53" />
                            <path stroke="#78e637" vectorEffect="non-scaling-stroke" d="
      M 229.98 59.37
      Q 230.24 59.79 230.11 60.29
      Q 230.02 60.64 229.61 60.99
      Q 226.05 64.06 223.52 65.32
      C 212.25 70.93 204.24 75.65 197.86 86.12
      Q 192.00 95.72 194.90 107.32
      C 195.63 110.27 194.02 111.12 191.38 110.25
      C 176.66 105.38 164.21 109.69 150.57 116.22" />
                            <path stroke="#2ac658" vectorEffect="non-scaling-stroke" d="
      M 299.77 279.22
      L 298.69 279.05
      Q 298.20 278.97 297.78 279.23
      C 291.12 283.49 284.77 286.65 276.64 287.99
      Q 267.43 289.50 258.36 291.65
      C 248.36 294.01 248.99 302.17 248.49 310.25
      C 247.97 318.71 240.30 326.88 233.37 330.91
      C 229.13 333.38 222.53 329.90 218.11 328.64
      Q 215.17 327.80 212.73 326.13
      C 202.36 319.02 191.77 311.79 180.48 306.25
      C 174.39 303.26 170.40 306.73 167.03 311.32
      Q 166.40 312.18 165.43 312.65
      Q 155.06 317.75 144.58 322.61
      C 142.06 323.78 141.32 326.15 139.79 327.31
      C 137.57 329.00 133.85 330.54 131.31 332.55
      Q 125.99 336.76 121.65 341.98" />
                            <path stroke="#2ac658" vectorEffect="non-scaling-stroke" d="
      M 782.62 254.27
      Q 781.63 254.21 780.98 253.87
      Q 780.56 253.66 780.10 253.67
      Q 751.31 254.83 723.27 261.39
      C 707.79 265.01 691.84 272.75 676.05 278.53
      Q 664.58 282.72 660.53 284.99
      Q 640.31 296.32 617.89 302.17
      Q 615.38 302.83 615.38 301.88" />
                            <path stroke="#25c466" vectorEffect="non-scaling-stroke" d="
      M 611.60 238.10
      Q 607.37 242.81 601.32 245.23
      C 599.61 245.92 595.92 246.35 594.22 247.94
      Q 540.35 298.09 486.29 348.02
      C 482.17 351.82 475.56 343.58 473.91 340.43
      C 472.28 337.30 468.56 334.33 466.00 333.22
      Q 464.87 332.73 464.99 331.85" />
                            <path stroke="#0a837e" vectorEffect="non-scaling-stroke" d="
      M 477.66 560.71
      L 477.31 560.87
      Q 476.98 561.01 476.65 560.87
      Q 456.40 552.05 435.75 544.20
      Q 425.56 540.33 414.88 540.70
      Q 412.02 540.80 402.75 542.63
      C 391.38 544.88 381.07 544.38 368.44 545.49
      Q 367.94 545.53 367.51 545.27
      L 367.01 544.96" />
                            <path stroke="#08989f" vectorEffect="non-scaling-stroke" d="
      M 283.80 482.36
      C 285.81 472.98 286.52 471.31 278.52 465.63
      Q 277.36 464.81 276.26 463.07
      Q 274.12 459.67 271.00 457.68
      A 3.10 3.09 -71.2 0 1 269.58 454.79
      C 270.45 445.30 260.09 443.66 254.02 438.95
      C 248.48 434.63 242.95 428.00 236.53 425.71
      C 231.95 424.08 225.00 422.80 219.27 420.50
      C 210.99 417.16 203.85 415.59 194.45 417.02
      Q 193.96 417.10 193.59 416.99
      Q 192.99 416.81 192.82 416.55" />
                        </g>
                        <path fill="#aff023" d="
      M 408.08 10.41
      Q 403.21 13.76 401.58 19.53
      C 398.86 29.10 399.22 38.78 399.02 50.00
      Q 398.69 68.22 395.84 114.49
      C 395.72 116.40 395.37 120.97 393.45 121.80
      A 2.01 2.00 -32.3 0 1 391.15 121.29
      C 387.08 116.70 384.59 110.30 381.91 106.35
      Q 372.21 92.06 357.12 83.76
      C 356.02 83.16 355.07 83.09 353.86 82.99
      Q 353.11 82.29 353.72 81.96
      C 354.65 81.46 355.29 81.11 355.73 80.07
      Q 369.43 47.54 388.22 17.66
      Q 394.59 7.53 398.54 2.80
      Q 399.76 1.34 401.96 2.34
      C 405.71 4.04 406.39 6.85 408.08 10.41
      Z" />
                        <path fill="#66eb37" d="
      M 442.84 74.53
      Q 443.02 75.18 442.63 75.58
      Q 442.26 75.96 442.22 76.02
      Q 422.42 104.19 402.53 132.30
      Q 400.61 135.02 400.45 136.24
      C 399.46 143.92 398.29 150.58 391.31 155.12
      C 373.68 166.57 357.20 178.87 342.90 194.39
      Q 333.69 204.39 319.38 211.03
      C 318.41 211.48 317.73 211.25 317.06 210.53
      C 320.63 165.92 334.77 124.30 353.92 84.18
      Q 354.23 83.52 353.86 82.99
      C 355.07 83.09 356.02 83.16 357.12 83.76
      Q 372.21 92.06 381.91 106.35
      C 384.59 110.30 387.08 116.70 391.15 121.29
      A 2.01 2.00 -32.3 0 0 393.45 121.80
      C 395.37 120.97 395.72 116.40 395.84 114.49
      Q 398.69 68.22 399.02 50.00
      C 399.22 38.78 398.86 29.10 401.58 19.53
      Q 403.21 13.76 408.08 10.41
      Q 409.16 9.12 408.93 12.05
      A 1.32 1.32 0.0 0 0 409.14 12.86
      Q 428.43 41.57 441.91 73.42
      Q 442.07 73.81 442.38 74.10
      L 442.84 74.53
      Z" />
                        <path fill="#aff023" d="
      M 229.98 59.37
      Q 230.24 59.79 230.11 60.29
      Q 230.02 60.64 229.61 60.99
      Q 226.05 64.06 223.52 65.32
      C 212.25 70.93 204.24 75.65 197.86 86.12
      Q 192.00 95.72 194.90 107.32
      C 195.63 110.27 194.02 111.12 191.38 110.25
      C 176.66 105.38 164.21 109.69 150.57 116.22
      Q 150.42 115.56 150.64 114.98
      Q 150.82 114.50 150.64 114.01
      C 142.36 92.09 140.83 67.67 144.66 44.54
      C 145.63 38.72 146.80 35.44 153.03 34.88
      Q 159.16 34.33 163.50 34.84
      Q 192.44 38.24 218.22 51.75
      Q 224.16 54.86 229.27 59.18
      Q 229.54 59.42 229.98 59.37
      Z" />
                        <path fill="#40db4a" d="
      M 150.57 116.22
      C 164.21 109.69 176.66 105.38 191.38 110.25
      C 194.02 111.12 195.63 110.27 194.90 107.32
      Q 192.00 95.72 197.86 86.12
      C 204.24 75.65 212.25 70.93 223.52 65.32
      Q 226.05 64.06 229.61 60.99
      Q 230.02 60.64 230.11 60.29
      Q 230.24 59.79 229.98 59.37
      Q 230.37 59.03 230.69 59.04
      Q 231.24 59.04 231.25 59.58
      C 231.28 60.61 231.31 61.24 232.08 61.99
      C 253.02 82.74 262.41 116.37 244.78 142.10
      C 240.77 147.96 236.14 151.31 229.38 152.59
      C 196.48 158.80 167.64 148.70 152.32 117.66
      A 1.09 1.06 -4.8 0 0 151.64 117.10
      Q 150.38 116.76 150.57 116.22
      Z" />
                        <ellipse fill="#fac705" cx="0.00" cy="0.00" transform="translate(594.96,116.76) rotate(119.0)"
                            rx="53.50" ry="52.86" />
                        <ellipse fill="#fac705" cx="0.00" cy="0.00" transform="translate(501.12,82.68) rotate(93.6)" rx="13.81"
                            ry="12.38" />
                        <ellipse fill="#fac705" cx="0.00" cy="0.00" transform="translate(299.36,82.08) rotate(108.4)" rx="13.09"
                            ry="11.81" />
                        <path fill="#40db4a" d="
      M 442.84 74.53
      Q 443.31 74.55 443.62 74.79
      Q 444.12 75.15 443.78 75.67
      L 443.57 76.00
      Q 443.23 76.53 443.52 77.08
      C 451.99 93.41 462.23 113.86 467.61 133.18
      C 468.90 137.81 471.82 150.47 467.97 153.45
      Q 434.33 179.48 401.37 206.38
      Q 390.56 215.20 384.70 220.69
      C 365.86 238.35 353.28 262.39 342.76 285.58
      A 1.78 1.78 0.0 0 1 339.96 286.18
      C 330.69 278.01 321.32 267.01 318.20 254.72
      Q 317.02 250.09 316.97 240.69
      Q 316.90 225.59 317.06 210.53
      C 317.73 211.25 318.41 211.48 319.38 211.03
      Q 333.69 204.39 342.90 194.39
      C 357.20 178.87 373.68 166.57 391.31 155.12
      C 398.29 150.58 399.46 143.92 400.45 136.24
      Q 400.61 135.02 402.53 132.30
      Q 422.42 104.19 442.22 76.02
      Q 442.26 75.96 442.63 75.58
      Q 443.02 75.18 442.84 74.53
      Z" />
                        <circle fill="#fac705" cx="115.56" cy="157.52" r="11.81" />
                        <circle fill="#fac705" cx="688.00" cy="158.60" r="12.17" />
                        <path fill="#14b066" d="
      M 454.61 292.62
      C 428.57 328.69 415.30 368.96 403.51 411.33
      A 2.11 2.11 0.0 0 1 400.40 412.58
      C 390.62 406.82 381.40 399.41 377.41 388.26
      C 357.65 333.00 368.82 273.14 414.71 234.69
      Q 434.23 218.34 460.14 200.38
      C 467.43 195.32 473.70 189.87 480.24 184.22
      A 1.81 1.81 0.0 0 1 483.20 185.26
      Q 488.68 215.13 485.24 245.50
      Q 483.94 256.95 475.37 267.13
      C 468.31 275.52 460.58 284.35 454.61 292.62
      Z" />
                        <path fill="#40db4a" d="
      M 299.77 279.22
      L 298.69 279.05
      Q 298.20 278.97 297.78 279.23
      C 291.12 283.49 284.77 286.65 276.64 287.99
      Q 267.43 289.50 258.36 291.65
      C 248.36 294.01 248.99 302.17 248.49 310.25
      C 247.97 318.71 240.30 326.88 233.37 330.91
      C 229.13 333.38 222.53 329.90 218.11 328.64
      Q 215.17 327.80 212.73 326.13
      C 202.36 319.02 191.77 311.79 180.48 306.25
      C 174.39 303.26 170.40 306.73 167.03 311.32
      Q 166.40 312.18 165.43 312.65
      Q 155.06 317.75 144.58 322.61
      C 142.06 323.78 141.32 326.15 139.79 327.31
      C 137.57 329.00 133.85 330.54 131.31 332.55
      Q 125.99 336.76 121.65 341.98
      Q 121.18 342.79 120.71 341.07
      Q 120.59 340.62 120.19 340.38
      Q 105.43 331.62 92.12 320.85
      C 59.02 294.07 27.28 267.81 2.67 233.45
      C -0.43 229.12 2.22 226.31 6.64 225.20
      Q 43.65 215.91 81.51 211.11
      C 94.21 209.50 107.46 208.29 120.25 209.50
      C 125.83 210.03 131.78 211.25 135.66 215.66
      C 149.61 231.53 163.22 247.68 177.36 263.38
      C 183.05 269.71 189.18 269.11 193.20 261.70
      C 197.24 254.25 202.14 246.66 197.21 238.45
      Q 195.62 235.79 187.97 229.83
      C 181.65 224.91 173.81 219.33 169.49 212.50
      A 1.41 1.41 0.0 0 1 169.92 210.56
      Q 170.96 209.89 172.77 210.24
      C 221.74 219.66 265.70 237.75 297.90 277.38
      A 1.06 1.05 68.5 0 0 298.77 277.76
      L 299.41 277.72
      Q 299.84 277.70 300.00 278.10
      Q 300.19 278.59 299.77 279.22
      Z" />
                        <path fill="#40db4a" d="
      M 782.62 254.27
      Q 781.63 254.21 780.98 253.87
      Q 780.56 253.66 780.10 253.67
      Q 751.31 254.83 723.27 261.39
      C 707.79 265.01 691.84 272.75 676.05 278.53
      Q 664.58 282.72 660.53 284.99
      Q 640.31 296.32 617.89 302.17
      Q 615.38 302.83 615.38 301.88
      Q 637.27 259.80 652.61 215.02
      C 653.78 211.58 659.12 210.88 663.26 210.67
      Q 728.56 207.46 791.59 224.49
      C 796.57 225.84 804.39 228.54 798.59 234.93
      Q 790.78 243.55 782.99 252.17
      Q 782.65 252.55 782.64 253.07
      L 782.62 254.27
      Z" />
                        <path fill="#40db4a" d="
      M 611.60 238.10
      Q 607.37 242.81 601.32 245.23
      C 599.61 245.92 595.92 246.35 594.22 247.94
      Q 540.35 298.09 486.29 348.02
      C 482.17 351.82 475.56 343.58 473.91 340.43
      C 472.28 337.30 468.56 334.33 466.00 333.22
      Q 464.87 332.73 464.99 331.85
      L 465.43 331.70
      A 1.21 1.19 -86.1 0 0 466.12 331.09
      C 493.86 275.93 548.58 219.11 614.42 215.91
      A 1.60 1.59 89.3 0 1 616.09 217.55
      Q 615.77 227.82 611.60 238.10
      Z" />
                        <path fill="#0aac81" d="
      M 611.60 238.10
      Q 612.62 238.68 610.92 240.62
      Q 610.01 241.67 609.63 242.72
      C 598.09 275.12 579.79 303.57 556.50 328.75
      Q 545.81 340.32 530.99 354.48
      C 528.80 356.57 529.08 358.94 530.00 361.83
      Q 532.42 369.40 534.77 376.75
      A 2.02 2.02 0.0 0 1 533.48 379.28
      Q 480.51 396.83 437.93 432.75
      Q 437.13 433.42 436.17 433.01
      Q 435.49 432.71 435.63 431.24
      Q 440.74 380.17 464.26 334.67
      C 464.66 333.89 464.56 333.37 464.24 332.63
      Q 464.02 332.14 464.50 331.91
      Q 464.70 331.81 464.99 331.85
      Q 464.87 332.73 466.00 333.22
      C 468.56 334.33 472.28 337.30 473.91 340.43
      C 475.56 343.58 482.17 351.82 486.29 348.02
      Q 540.35 298.09 594.22 247.94
      C 595.92 246.35 599.61 245.92 601.32 245.23
      Q 607.37 242.81 611.60 238.10
      Z" />
                        <path fill="#14b066" d="
      M 782.62 254.27
      L 780.97 254.74
      Q 780.49 254.87 780.15 255.22
      C 734.40 302.49 683.38 343.33 624.94 372.68
      C 623.83 373.25 623.20 373.30 622.02 373.19
      Q 613.18 372.31 604.37 371.11
      C 592.59 369.49 579.51 371.49 567.39 372.31
      Q 565.72 372.42 564.78 371.34
      A 2.07 2.06 44.4 0 1 564.75 368.66
      Q 573.19 358.53 582.21 348.85
      C 594.86 335.26 604.81 320.65 613.78 304.63
      Q 614.04 304.18 614.04 303.77
      Q 614.05 303.34 613.92 302.86
      Q 613.80 302.38 614.23 302.13
      Q 614.76 301.82 615.38 301.88
      Q 615.38 302.83 617.89 302.17
      Q 640.31 296.32 660.53 284.99
      Q 664.58 282.72 676.05 278.53
      C 691.84 272.75 707.79 265.01 723.27 261.39
      Q 751.31 254.83 780.10 253.67
      Q 780.56 253.66 780.98 253.87
      Q 781.63 254.21 782.62 254.27
      Z" />
                        <path fill="#14b066" d="
      M 299.77 279.22
      Q 299.82 279.48 299.90 279.77
      Q 299.97 280.04 300.15 280.26
      Q 332.45 319.54 340.21 369.99
      Q 340.43 371.46 340.19 372.36
      A 1.73 1.73 0.0 0 1 337.92 373.55
      C 289.87 356.07 241.92 353.73 193.10 369.25
      C 186.69 371.28 181.06 374.44 174.23 371.17
      Q 148.16 358.67 124.04 342.74
      Q 123.62 342.47 123.14 342.35
      L 121.65 341.98
      Q 125.99 336.76 131.31 332.55
      C 133.85 330.54 137.57 329.00 139.79 327.31
      C 141.32 326.15 142.06 323.78 144.58 322.61
      Q 155.06 317.75 165.43 312.65
      Q 166.40 312.18 167.03 311.32
      C 170.40 306.73 174.39 303.26 180.48 306.25
      C 191.77 311.79 202.36 319.02 212.73 326.13
      Q 215.17 327.80 218.11 328.64
      C 222.53 329.90 229.13 333.38 233.37 330.91
      C 240.30 326.88 247.97 318.71 248.49 310.25
      C 248.99 302.17 248.36 294.01 258.36 291.65
      Q 267.43 289.50 276.64 287.99
      C 284.77 286.65 291.12 283.49 297.78 279.23
      Q 298.20 278.97 298.69 279.05
      L 299.77 279.22
      Z" />
                        <circle fill="#14b066" cx="70.44" cy="376.84" r="28.24" />
                        <circle fill="#fac705" cx="728.36" cy="376.76" r="28.27" />
                        <path fill="#0aac81" d="
      M 477.66 560.71
      L 477.31 560.87
      Q 476.98 561.01 476.65 560.87
      Q 456.40 552.05 435.75 544.20
      Q 425.56 540.33 414.88 540.70
      Q 412.02 540.80 402.75 542.63
      C 391.38 544.88 381.07 544.38 368.44 545.49
      Q 367.94 545.53 367.51 545.27
      L 367.01 544.96
      Q 367.02 544.50 366.86 544.09
      C 353.21 509.99 322.73 484.43 285.26 482.01
      Q 284.65 481.97 283.80 482.36
      C 285.81 472.98 286.52 471.31 278.52 465.63
      Q 277.36 464.81 276.26 463.07
      Q 274.12 459.67 271.00 457.68
      A 3.10 3.09 -71.2 0 1 269.58 454.79
      C 270.45 445.30 260.09 443.66 254.02 438.95
      C 248.48 434.63 242.95 428.00 236.53 425.71
      C 231.95 424.08 225.00 422.80 219.27 420.50
      C 210.99 417.16 203.85 415.59 194.45 417.02
      Q 193.96 417.10 193.59 416.99
      Q 192.99 416.81 192.82 416.55
      C 196.07 411.10 198.17 406.36 203.42 402.45
      Q 206.92 399.83 214.05 397.54
      C 295.59 371.41 377.76 416.40 419.82 486.05
      C 422.06 489.76 424.80 491.27 428.09 487.63
      C 439.57 474.88 452.25 461.10 466.49 450.54
      C 504.34 422.49 552.37 401.82 599.24 402.42
      C 608.48 402.53 622.12 443.23 624.01 448.75
      C 625.18 452.17 622.85 453.60 619.87 454.50
      Q 530.36 481.69 477.97 559.02
      A 1.64 1.63 -27.6 0 0 477.69 559.90
      L 477.66 560.71
      Z" />
                        <path fill="#0683bc" d="
      M 192.82 416.55
      Q 192.99 416.81 193.59 416.99
      Q 193.96 417.10 194.45 417.02
      C 203.85 415.59 210.99 417.16 219.27 420.50
      C 225.00 422.80 231.95 424.08 236.53 425.71
      C 242.95 428.00 248.48 434.63 254.02 438.95
      C 260.09 443.66 270.45 445.30 269.58 454.79
      A 3.10 3.09 -71.2 0 0 271.00 457.68
      Q 274.12 459.67 276.26 463.07
      Q 277.36 464.81 278.52 465.63
      C 286.52 471.31 285.81 472.98 283.80 482.36
      Q 283.62 482.93 282.22 482.38
      Q 281.43 482.08 280.74 482.12
      Q 259.92 483.47 241.09 491.76
      C 228.25 497.40 219.88 502.55 217.35 516.24
      Q 215.06 528.64 212.92 541.01
      Q 212.52 543.27 212.96 545.34
      A 1.48 1.48 0.0 0 0 214.77 546.47
      C 217.86 545.69 221.41 541.70 223.81 539.58
      C 247.27 518.83 279.27 508.98 309.35 521.12
      A 1.97 1.96 21.0 0 1 310.47 523.62
      Q 301.03 549.47 289.04 574.36
      Q 266.76 620.65 253.16 645.43
      C 250.68 649.94 245.80 650.48 240.51 650.46
      Q 162.88 650.16 85.25 649.97
      C 82.59 649.96 81.74 649.11 82.78 646.51
      Q 84.86 641.24 88.88 632.60
      C 124.00 556.98 155.07 490.12 191.79 419.16
      C 192.16 418.45 192.01 418.00 191.65 417.37
      Q 191.38 416.87 191.89 416.63
      Q 192.24 416.47 192.82 416.55
      Z" />
                        <ellipse fill="#14b066" cx="0.00" cy="0.00" transform="translate(738.68,476.40) rotate(101.9)"
                            rx="14.81" ry="14.13" />
                        <ellipse fill="#14b066" cx="0.00" cy="0.00" transform="translate(61.40,476.48) rotate(-35.0)" rx="15.13"
                            ry="14.45" />
                        <path fill="#0890a5" d="
      M 642.43 485.01
      C 668.25 538.74 693.88 592.56 719.12 646.56
      Q 720.42 649.35 717.74 650.03
      Q 716.60 650.32 715.50 650.32
      Q 635.37 650.51 555.25 650.49
      Q 550.26 650.49 547.90 645.46
      Q 524.58 595.70 516.16 579.10
      C 512.09 571.05 514.02 567.23 519.29 560.12
      C 548.44 520.78 591.75 494.72 639.33 483.65
      Q 641.53 483.13 642.43 485.01
      Z" />
                        <path fill="#09597b" d="
      M 477.66 560.71
      Q 477.96 561.95 476.48 562.07
      Q 475.93 562.11 475.62 562.57
      Q 440.72 613.51 426.40 675.38
      Q 426.00 677.11 423.75 677.10
      Q 396.13 677.01 368.59 676.91
      Q 365.22 676.90 365.68 673.56
      C 371.55 631.61 378.29 589.44 368.10 547.47
      A 0.99 0.96 7.7 0 0 367.59 546.82
      L 366.74 546.39
      Q 366.31 546.17 366.49 545.73
      Q 366.69 545.24 367.01 544.96
      L 367.51 545.27
      Q 367.94 545.53 368.44 545.49
      C 381.07 544.38 391.38 544.88 402.75 542.63
      Q 412.02 540.80 414.88 540.70
      Q 425.56 540.33 435.75 544.20
      Q 456.40 552.05 476.65 560.87
      Q 476.98 561.01 477.31 560.87
      L 477.66 560.71
      Z" />
                    </svg>
                </div>
            </div>



            <div className="about-container reveal fade-bottom" id='aboutus'>
                <div>
                    <p className="aboutus-Topic">ABOUT US</p>
                    <p className="about-Para">
                        This website serves as a valuable tool for farmers across the country, offering them the means to
                        enhance
                        their agricultural
                        yield through the power of predictive analysis. By leveraging advanced algorithms and incorporating data
                        on
                        climate patterns
                        and soil fertility, this platform empowers farmers to make informed decisions about their farming
                        practices.

                        Upon inputting their farm data, such as crop types, planting dates, and soil composition, the website
                        utilizes the available
                        weather API and soil fertility data to generate personalized reports. These reports provide farmers with
                        crucial insights into
                        the optimal conditions for their crops, enabling them to plan their activities accordingly.</p>
                    <br /><br />
                    <p className="Made">Made easy for you!</p>
                </div>

                <img className="about-img" src={Information} alt="Info" />
            </div>
            <div className="cardpanel reveal fade-bottom" id='cardpanel'>
                <div className="cardpanel-topic">
                    Our Main Users
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src={Wholesale} alt="Card PNG" />
                    </div>
                    <div className="card-content">
                        <h2>Wholesale Buyer</h2>
                        <p>
                            Wholesale buyers are businesses or individuals who purchase goods in
                            bulk directly from farmers. They often buy products at a lower price
                            and then resell them to retailers or end consumers, contributing to
                            the distribution of goods in the market.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src={Farmer} alt="Card PNG" />
                    </div>
                    <div className="card-content">
                        <h2>Farmer</h2>
                        <p>
                            Farmers play a vital role in our society as they are responsible for
                            producing the food we eat. Their hard work and dedication contribute
                            significantly to the agricultural sector. Despite of numerous
                            challenges, farmers ensure that the food supply is stable and secure
                            for the growing populations.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src={Transporter} alt="Card PNG" />
                    </div>
                    <div className="card-content">
                        <h2>Transporter</h2>
                        <p>
                            Transporters of goods are responsible for the movement and delivery
                            of goods from one location to another. They play a critical role in
                            the supply chain, ensuring that goods are efficiently transported,
                            enabling businesses to meet the demands of consumers and markets.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-contactus reveal fade-bottom">
                <form action="/action_page.php">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." className='input' />

                    <label htmlFor="fname">You email</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your email.." className='input' />

                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: " 200px" }} className='textarea'></textarea>

                    <input type="submit" value="Submit" className='submit' />
                </form>
            </div>

        </>
    )
}

export default Home