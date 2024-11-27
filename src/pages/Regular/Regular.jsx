import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import '../Results/Results.scss';

const Regular = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleStart = () => {
        navigate('/questions'); // Navigate to the questions page
    }

    const handleBackToLanding = () => {
        navigate('/'); // Navigate to the Landing page
    };

    return (
        <body className='results'>

            <div className='results__where'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3157 15.6628C17.6119 14.2125 18.4 12.2984 18.4 10.2002C18.4 5.67146 14.7287 2.0002 10.2 2.0002C5.67127 2.0002 2 5.67146 2 10.2002C2 14.7289 5.67127 18.4002 10.2 18.4002C12.2228 18.4002 14.0746 17.6678 15.5045 16.4536C15.5333 16.5155 15.5732 16.5734 15.6243 16.6245L20.7757 21.7759C21.01 22.0102 21.3899 22.0102 21.6243 21.7759C21.8586 21.5416 21.8586 21.1617 21.6243 20.9274L16.4728 15.7759C16.4255 15.7287 16.3724 15.691 16.3157 15.6628ZM17.2 10.2002C17.2 14.0662 14.066 17.2002 10.2 17.2002C6.33401 17.2002 3.2 14.0662 3.2 10.2002C3.2 6.3342 6.33401 3.2002 10.2 3.2002C14.066 3.2002 17.2 6.3342 17.2 10.2002Z" fill="#222222" />
                </svg>
                <h2>Where To?</h2>
            </div>

            <div className='results__icons'>

                <div className='results__icon-active' style={{ textAlign: 'center' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 3V7M3 5H7M6 17V21M4 19H8M13 3L15.2857 9.85714L21 12L15.2857 14.1429L13 21L10.7143 14.1429L5 12L10.7143 9.85714L13 3Z" stroke="black" stroke-width="1.25" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                    <p className='results__icon-name'>For You</p>
                </div>

                <div className='results__icon-inactive' style={{ textAlign: 'center' }}>
                    <svg width="24" height="24" viewBox="0 30 100 30" xmlns="http://www.w3.org/2000/svg">
                        <image id="image0_30_782" width="96" height="96" href="data:image/png;base64,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" />
                    </svg>
                    <p className='results__icon-name'>Icons</p>
                </div>

                <div className='results__icon-inactive' style={{ textAlign: 'center' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect width="24" height="24" fill="url(#pattern0_25_660)" />
                        <defs>
                            <pattern id="pattern0_25_660" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use href="#image0_25_660" transform="scale(0.0104167)" />
                            </pattern>
                            <image id="image0_25_660" width="96" height="96" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN1SURBVHgB7ZyNcdNAFIQXhgJCBy4hJbgD0kFKIFSAqAA6uEclLgGo4KCClCCkiQ+S2CeddO/+pP1mdphx4Hzaz4rEi2OAEEIIIUV4gzY5DDme/xyxQ34N+QmSlOOQ05Dekx9D7kGSYOAv/nW+gqiypHwXA6LCmvIpQYmY8ikhkrny7ZBv51hQgipz5cuQm2d//+b8WCkJvudskpDyfQjKSNiMgJjyHYL8EjYhQKN8hyCvhOYFaJbvEOST0LSAFOU7BHkkNCsgZfkOQXoJTQrIUb5DkFZCcwJylu8QpJPQlIAS5TsEaSQ0I6Bk+Q6BvoQmBNRQvkOgK6F6AXPl1xiDcKoWMB5I7WXHSqhWwHgAtZesIaFKAQbtlBwroToBBm0VHCuhKgEG7ZUbK6EaAQbTByCoH8FyCVUI2EL5DsEyCcUFbKl8hyBcQlEBWyzfIQiTUEzAlst3COYlFBGwh/IdguljzS5gT+U7BJUI2GP5DkFhAXsu3yEoJGCufCahAAOgZ8oIMAB6ZlUMIjFAkY1TAlh+UQkGKLrhXUswCxfu8PKXJfbCeMwPUJawtPwHkA5KEpaWP2aPr/zXjB1EfztaU34P4lh9TXh7XuDPxOLfQdYy1d1F5x0uLcn5azwDppnqR3D9xuUqHS7Ln3oC7WvAuN5nTH8gx9qk+iCPqWuAQxBQvqPD5VTTep6ggx4HzP/CtUYs/n/MjQYf4Rf+HEFEXwL/AY23ohpnQo7yn0uI3bM7W33PYaDIEfnK2Uo+QJkTgJ4JikUCDkMeAfTMZB6x4BrzDnWj9Zl2PTaARf5Xkxa5932CMncA+gLRosTejwH7+jeKmONu4mtfhrzH07eLtSlFzJ7HY/40sfY9FBn/U3HNstY4utQZoEHnWdtCEd8BaI0iWhYQMorwEnr695H/nut7CL0GkERQQGFiBfBHkpEdhAr47XmcP5T3326qfpK7wH+l1xhHt3gXtItxtBYl9r6JcbQWufdtkYAD8o+jtci550XjaN6GNoRF3ldSq2fAmBOU4Th6eY4B++I4OiIcR1eyfudZ20IR3wFwHM1xdNvr8za0MBRQGI6j4+E4ujD3nsc5jk68Pt8dXXn47uiCsUjAAXx3dEgWjaOXcgtKmCv/Fok5oMxouvackPCVf41xQirwD+r2EIunu50jCCGEEELIAv4CnRUcMAGic6sAAAAASUVORK5CYII=" />
                        </defs>
                    </svg>
                    <p className='results__icon-name'>Cabins</p>
                </div>

                <div className='results__icon-inactive' style={{ textAlign: 'center' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect width="24" height="23.7526" fill="url(#pattern0_25_666)" />
                        <defs>
                            <pattern id="pattern0_25_666" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use href="#image0_25_666" transform="scale(0.0103093 0.0104167)" />
                            </pattern>
                            <image id="image0_25_666" width="97" height="96" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABgCAYAAAANWhwGAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATiSURBVHgB7ZyNcdQwEIUfDAVABYgOoAJMBUAFHBUQKohSAVABRwVABTEVJFQQUUGgArgdWZOQWLIsa+W9y34zmhvL9tqnp9XPWjagKIoimqe7dLpLfxuks+F6yjXMLl2ijQAh0fUe4o5yfyTvFdoXCF1vgzvKmAhr1Uj1BGU9VAShWIx3nhZ1sGjb6UtNNhSIeoIAVAQBqAgCUBEEoCIIQJIIJ7t070DSScZ/tCFTPUEAKoIAVAQBqAgCUBEEoCIIQEUQgIoggLsuAj3NO4Zf1BCeq18O2+/gn7ezs4YIUh5jUiFfwM9cO1zd18Nh++Ow/xjMrCHC40i+Qzs+wxdyToWww/FsSPIEhzZ8wPyVHZvhPBbWEKGL5P8GP5tdOkIZdF4HBlqL0EXySYBz8PMOy2DpH1qL8CqS30IAg/hyS7r+C/gQ8zPE76cDw4iptQgvI/nfwU9MAAcvQD9sB0FizWOHyrQUgbzARPZ9Az8xEagC3Cxw2v4SOd6gMi1FiLXHPdoOT8XRSoQN4m68RRtcJP8Nbg+baTvWdJ6hMi1ECKGBMRzibl+bPpJP90dhitBcdcO2iRz/E5V5AH5IABPZZ9EOBy9EN7KPBMip4edgaDq5PYEEiE2OHNp5QeAEy/gIBjhFoLbWJvan9nHR79InlEHnsVQaLhFIgG1iP9sfyuCo4NpfUB7umIRDBGqCton9Dut4wXU2yGuaaL7wHsyvctXsmA18yLdLHOOQno22xMJXFhqK0kSSOmcaKYU41g/4PoD9XmuIQDdOE7EjpOPz9GdeQ9bEzME3jaX9RBWWiNDB16Cxyc5NSADygBaBur1jjgj0RGwD77bkwibzPAcvgIMyyhwRNpjfQfW79BYqQBKuIWoYVagHZMARtqCwNAngoGRRWwQqfJap/SFTuzmiFQns63QODY4+wYJxecghMqc5orb+F/KGp2Hi9jayP6xye4mr1W9hrnE+pB7l8aW17U/NmyaxmP6sQoe8j1KNeQTNrnO/p0TLEN9gHpLsp8owiZ1hYAP/R1IXDtFHg/KviZ1h2vsk22cVIdzcWeLCVGsovHEx42ZjtTb23LfbA/vRMqwxRHXwk7JTjC8rofbxK5Zj4Pslh6tlKmT7Oep8Q88w249Sa54QAnQ5br0Ug+XLGde0f4uaQ9QgxJz4ew8f3n4EvwSRfmlEVSva2o/Yf93AvsNCLJZ1KrHz59rLtSPRvi28p2oGqB1NDeEukL+es6RDl2DfYkYZcsyYqTmKPaly8Kuee+RBHeUT5DVRPfxzY0n2s+Ba/NVjPIZkUMZ2SAZ+pBJGK+Rxf7B8PeuW2X4SThHCEO8mBuUdoxvSN/DgmO2Pwrn4q4/ks4659xFOEX5F8hcHtw4NThFi8wUV4QYtVmWPoaHsCSwWTjQm7FBoQ0PZE9ilBibslKSDDmXvywdGaERFBZAKNZ+i/M1KbvtJ1uoTSjDQULYYDDSUXZUeGsoexaJNx2wXnl/UCTayb+ecs4YnOPiHP3biONpfUqucEPvZrCECTZD6zGM1lC2ILTSULQYHDWUrHKgIAlARBLCGCMdYNj7fh3Sc8d9tyFRPEICKIAAVQQAqggBUBKFY8I4cLJT/UE8QgIoggDER5rzkUQK3/YNg6v2CJYnsGihZUDw99UZmSTqFLgZWFEWRzD8yxKVblfsEOgAAAABJRU5ErkJggg==" />
                        </defs>
                    </svg>
                    <p className='results__icon-name'>Amazing Views</p>
                </div>

                <div className='results__icon-inactive' style={{ textAlign: 'center' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect width="24" height="24" fill="url(#pattern0_25_669)" />
                        <defs>
                            <pattern id="pattern0_25_669" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use href="#image0_25_669" transform="scale(0.0104167)" />
                            </pattern>
                            <image id="image0_25_669" width="96" height="96" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQOSURBVHgB7Z3Lkdw2EECfPwGMM0AG2qNvRgjKYCYDKwPSEUgZzPjok6SbbxxHYDsCKoO1b77J7NrZKmlrQPZwAAIg+1V1ScXdBZv9QwPg7IJhGIZhGIZhGIZhGIaxFb6hDvwgrwZ5uMhuEPfiez5d5J9BzoP8ffnXmIkf5DjI4yCfZ8rjZQyPoUIiu+E+o4ekH2SPEeRn0hjeHDGBG6QjveGvOcKxcZaK+rE54g0bpeE2Q3U8Oew1T5G7+2Is+b90R36QltszqmFjHNEZ5tnoO25HfuYwyJ/Kex3ZCBrji+E98fA81fzNO0FSPWdNfsP0nLPaciSlZOzBJUId6XFMZ8PqJmbHeORJnZ5T5+/RZ2xueGRlLepYxC1t/Gd2jDuhYyUcyF92QuwYD45VlKLQA5aS5o5weZTrObIzGgfqiC7RJaRnS8WEor+nPDrCWVAlnnBUecrDU5e+k5wIdz2lEsqCIxUSmtj2lEtoLqiuDHnC6VxyVyG6hQLHk4BvScND4PqZp0PzUhHd/gp87YEEpHLAT4Hrf1A+HwPXX5GAVA4IlZkz5fMpcD1JBnxPGlzgeke9VLEiFiXfMr7VW7O8pWAc+uO/mqWnwK1qT963G3I44TWF0FCX8WJKQ0ak3nfUZ7TY8p4MJUlasp5p5U7UvZ8uup+Yfk6xhWMhtG+zrelgu0WXDUmfWdtiSjQkWbRkRpv1SVpVh67F7Fj3C68OnR2iliSPruS8Yzu06Jxwd6vaKG4kzjmwPQ7oArNhBtoWc06qNRfFRe6plyWM49DNCze1qilbzGuTeMvtlDRO9FZVY/y57da1lJ1z3FfaOEKLrlx/xcvzgB3TUS2nRh8wXiInaVOnfarTQE0JmvsaeUuc7qktbJwGXQlSr48culLUcDvygM+TXst8ShhHqoVMsFN2krWD40a0g7+n8vcnZ+LQBend66NWcZOebX3kc8/0GmBumb7KQXFDcYJn/TRErvdaHOnmhRrQLk7lexyJcOg2o4o+vJ6BY6F6r+WdQplZM3+B7Fm43mtpmXbCFqQn4/mHdt9ordJRQJY7tumEos4/tIu2NYknAt8Rh/8G+W2QHwb5kW3w7yC/cyep3o7eAnsK3ILpWaZehspCCnYkLkOx8IQVdcRlSQcIXeB+HQVxYjkll3aAH7lnEWVoLE33xGdpB4x9eK+lAA4sGyFLO0AIbb90FIAocU25I2nI4QBPoZOxY3nFcjhACAVa1lVxKDV70pHLAW3gvll/rU3P8lGRywHZ1gSfZ4gjHbkcIHTcbos2NFiqrYgz4Q88184vRCSVA06sF80bcGpSOeAj60WM/yuRSOGAE2X/RpQYfCASKRwQLToK5oz9fRrDMAzDMAzDMAzDMAzDMAyjHv4HIqkMIh5hfK4AAAAASUVORK5CYII=" />
                        </defs>
                    </svg>
                    <p className='results__icon-name'>OMG!</p>
                </div>

            </div>
            <div className='results__curated-container'>

                <div className='results__curated-button'>
                    <h1 className='results__title'>Curated Recommendations</h1>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 3V7M3 5H7M6 17V21M4 19H8M13 3L15.2857 9.85714L21 12L15.2857 14.1429L13 21L10.7143 14.1429L5 12L10.7143 9.85714L13 3Z" stroke="black" stroke-width="1.25" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                </div>
                <h3 className='results__edit'>Edit</h3>


            </div>
            <h3 className='results__sub'>These are the results for your next trip...</h3>
            <div className='picture'>

            <div className='picture'>
                <div className='picture__image picture__image--2'>
                  
                </div>
                <h2 className='picture__details'>Chilly Spot Iceland</h2>
                <h2 className='picture__details picture__details--host'>Hosted by Elizabeth Cohen</h2>
                <h2 className='picture__details'>Sold Out</h2>
            </div>

                <div className='picture__image picture__image--1'>
                    
                </div>
                <h2 className='picture__details'>Tropical Paradise Bahamas</h2>
                <h2 className='picture__details picture__details--host'>Hosted by Kareem Fernandez</h2>
                <h2 className='picture__details'>Available</h2>
            </div>

          
            <div className='picture'>
                <div className='picture__image picture__image--2'>
                  
                </div>
                <h2 className='picture__details'>Chilly Spot Iceland</h2>
                <h2 className='picture__details picture__details--host'>Hosted by Elizabeth Cohen</h2>
                <h2 className='picture__details'>Sold Out</h2>
            </div>

            <div className='results__icons-bottom'>

                <div className='results__icon-active-bottom' style={{ textAlign: 'center' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleBackToLanding}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3157 15.6628C17.6119 14.2125 18.4 12.2984 18.4 10.2002C18.4 5.67146 14.7287 2.0002 10.2 2.0002C5.67127 2.0002 2 5.67146 2 10.2002C2 14.7289 5.67127 18.4002 10.2 18.4002C12.2228 18.4002 14.0746 17.6678 15.5045 16.4536C15.5333 16.5155 15.5732 16.5734 15.6243 16.6245L20.7757 21.7759C21.01 22.0102 21.3899 22.0102 21.6243 21.7759C21.8586 21.5416 21.8586 21.1617 21.6243 20.9274L16.4728 15.7759C16.4255 15.7287 16.3724 15.691 16.3157 15.6628ZM17.2 10.2002C17.2 14.0662 14.066 17.2002 10.2 17.2002C6.33401 17.2002 3.2 14.0662 3.2 10.2002C3.2 6.3342 6.33401 3.2002 10.2 3.2002C14.066 3.2002 17.2 6.3342 17.2 10.2002Z" fill="url(#paint0_linear_25_640)" />
                        <defs>
                            <linearGradient id="paint0_linear_25_640" x1="21.8" y1="2.00019" x2="0.0133708" y2="4.47704" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#D03660" />
                                <stop offset="1" stop-color="#D73B54" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <p className='results__icon-name'>Explorer</p>
                </div>

                <div className='results__icon-active-bottom'style={{ textAlign: 'center' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9997 20.1445L11.3911 19.7863C7.09286 17.2568 4.63777 14.74 3.41989 12.522C2.12195 10.1582 2.22507 8.14075 2.96272 6.69358C4.48246 3.71205 8.78026 2.80615 11.3721 6.08424L11.9996 6.87788L12.6272 6.08428C15.2195 2.80605 19.5175 3.71214 21.0372 6.69358C21.7749 8.14074 21.8779 10.1582 20.5799 12.522C19.3619 14.7399 16.9067 17.2568 12.6083 19.7863L11.9997 20.1445ZM11.9996 8.8126L10.4308 6.8285C8.41309 4.27656 5.17779 4.99034 4.03184 7.23854C3.49793 8.286 3.33892 9.88135 4.47174 11.9444C5.55151 13.9108 7.81509 16.2894 11.9997 18.7521C16.1845 16.2894 18.4482 13.9108 19.5281 11.9444C20.661 9.88129 20.502 8.28596 19.9681 7.23853C18.8222 4.99047 15.5866 4.27641 13.5684 6.8286L11.9996 8.8126Z" fill="#222222" />
                    </svg>

                    <p className='results__icon-name'>Wishlists</p>
                </div>

                <div className='results__icon-active-bottom' style={{ textAlign: 'center' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.7315 16.2142C21.6291 15.974 21.5268 15.7137 21.4244 15.4935C21.2607 15.1331 21.0969 14.7928 20.9536 14.4725L20.9331 14.4525C19.5207 11.4494 18.006 8.40641 16.4093 5.4034L16.3479 5.28328C16.1842 4.98298 16.0204 4.66266 15.8567 4.34234C15.652 3.98198 15.4473 3.6016 15.1198 3.24124C14.4647 2.44044 13.5231 2 12.5201 2C11.4966 2 10.5755 2.44044 9.89999 3.2012C9.59294 3.56156 9.36778 3.94194 9.16308 4.3023C8.99932 4.62262 8.83556 4.94294 8.67181 5.24324L8.6104 5.36336C7.03423 8.36637 5.49901 11.4094 4.0866 14.4124L4.06613 14.4525C3.92284 14.7728 3.75908 15.1131 3.59533 15.4735C3.49298 15.6937 3.39063 15.9339 3.28828 16.1942C3.02218 16.9349 2.9403 17.6356 3.04265 18.3564C3.26781 19.8579 4.2913 21.1191 5.7037 21.6797C6.23592 21.8999 6.7886 22 7.36175 22C7.52551 22 7.7302 21.98 7.89396 21.96C8.56946 21.8799 9.26543 21.6597 9.94093 21.2793C10.7802 20.8188 11.5785 20.1582 12.4792 19.1972C13.3798 20.1582 14.1986 20.8188 15.0174 21.2793C15.6929 21.6597 16.3889 21.8799 17.0644 21.96C17.2281 21.98 17.4328 22 17.5966 22C18.1697 22 18.7429 21.8999 19.2546 21.6797C20.6875 21.1191 21.6905 19.8378 21.9157 18.3564C22.0794 17.6557 21.9976 16.955 21.7315 16.2142ZM12.4996 17.2553C11.3943 15.8939 10.6778 14.6126 10.4322 13.5315C10.3299 13.0711 10.3094 12.6707 10.3708 12.3103C10.4117 11.99 10.5345 11.7097 10.6983 11.4695C11.0872 10.9289 11.7423 10.5886 12.4996 10.5886C13.257 10.5886 13.9325 10.9089 14.301 11.4695C14.4647 11.7097 14.5875 11.99 14.6285 12.3103C14.6899 12.6707 14.6694 13.0911 14.5671 13.5315C14.3214 14.5926 13.605 15.8739 12.4996 17.2553ZM20.667 18.1962C20.5238 19.2372 19.8073 20.1381 18.8043 20.5385C18.313 20.7387 17.7808 20.7988 17.2486 20.7387C16.7369 20.6787 16.2251 20.5185 15.6929 20.2182C14.956 19.8178 14.2191 19.1972 13.3594 18.2763C14.7104 16.6547 15.5292 15.1732 15.8362 13.8519C15.9795 13.2312 16 12.6707 15.9385 12.1502C15.8567 11.6496 15.6724 11.1892 15.3859 10.7888C14.7513 9.88789 13.6869 9.36737 12.4996 9.36737C11.3124 9.36737 10.248 9.90791 9.61341 10.7888C9.32684 11.1892 9.14261 11.6496 9.06073 12.1502C8.97885 12.6707 8.99932 13.2513 9.16308 13.8519C9.47012 15.1732 10.3094 16.6747 11.6399 18.2963C10.8007 19.2172 10.0433 19.8378 9.30637 20.2382C8.77416 20.5385 8.26241 20.6987 7.75067 20.7588C7.19799 20.8188 6.66578 20.7387 6.19498 20.5586C5.19196 20.1582 4.47552 19.2573 4.33224 18.2162C4.27083 17.7157 4.31177 17.2152 4.51646 16.6547C4.57787 16.4545 4.68022 16.2543 4.78257 16.014C4.92586 15.6937 5.08961 15.3534 5.25337 15.013L5.27384 14.973C6.68625 11.99 8.201 8.94695 9.77717 5.98398L9.83858 5.86386C10.0023 5.56356 10.1661 5.24324 10.3299 4.94294C10.4936 4.62262 10.6778 4.32232 10.903 4.06206C11.3329 3.58158 11.906 3.32132 12.5406 3.32132C13.1751 3.32132 13.7483 3.58158 14.1782 4.06206C14.4033 4.32232 14.5875 4.62262 14.7513 4.94294C14.9151 5.24324 15.0788 5.56356 15.2426 5.86386L15.304 5.98398C16.8597 8.96697 18.3744 12.01 19.7868 14.993V15.013C19.9506 15.3333 20.0939 15.6937 20.2576 16.014C20.36 16.2543 20.4623 16.4545 20.5238 16.6547C20.6875 17.1752 20.7489 17.6757 20.667 18.1962Z" fill="#222222" />
                    </svg>

                    <p className='results__icon-name'>Voyages</p>
                </div>

                <div className='results__icon-active-bottom' style={{ textAlign: 'center' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.59951 2.4C3.61129 2.4 1.99951 4.01177 1.99951 6V15C1.99951 16.9882 3.61129 18.6 5.59951 18.6H8.35098L10.9681 21.2172C11.593 21.842 12.606 21.842 13.2309 21.2172L15.848 18.6H18.5995C20.5877 18.6 22.1995 16.9882 22.1995 15V6C22.1995 4.01178 20.5877 2.4 18.5995 2.4H5.59951ZM15.5995 17.4H18.5995C19.925 17.4 20.9995 16.3255 20.9995 15V6C20.9995 4.67452 19.925 3.6 18.5995 3.6H5.59951C4.27403 3.6 3.19951 4.67452 3.19951 6V15C3.19951 16.3255 4.27403 17.4 5.59951 17.4H8.59951C8.75307 17.4 8.90662 17.4586 9.02378 17.5757L11.8167 20.3686C11.9729 20.5248 12.2261 20.5248 12.3824 20.3686L15.1752 17.5757C15.2924 17.4586 15.446 17.4 15.5995 17.4Z" fill="#222222" />
                    </svg>

                    <p className='results__icon-name'>Messages</p>
                </div>

                <div className='results__icon-active-bottom' style={{ textAlign: 'center' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.89971 12.1C2.89971 7.18467 6.88437 3.2 11.7997 3.2C16.715 3.2 20.6997 7.18467 20.6997 12.1C20.6997 13.9277 20.1488 15.6268 19.2039 17.0402C17.5827 15.7137 15.599 14.8138 13.424 14.5117C15.2194 13.8506 16.4999 12.1248 16.4999 10.0999C16.4999 7.50416 14.3956 5.3999 11.7999 5.3999C9.20411 5.3999 7.09985 7.50416 7.09985 10.0999C7.09985 12.1248 8.38033 13.8506 10.1757 14.5117C8.00067 14.8138 6.01687 15.7138 4.39566 17.0403C3.4507 15.6269 2.89971 13.9278 2.89971 12.1ZM5.12853 17.9913C6.75923 19.8365 9.14359 21 11.7997 21C14.4559 21 16.8403 19.8364 18.471 17.9911C16.6571 16.4971 14.3333 15.5999 11.7999 15.5999C9.26636 15.5999 6.94243 16.4972 5.12853 17.9913ZM11.7997 2C6.22163 2 1.69971 6.52192 1.69971 12.1C1.69971 17.6781 6.22163 22.2 11.7997 22.2C17.3778 22.2 21.8997 17.6781 21.8997 12.1C21.8997 6.52192 17.3778 2 11.7997 2ZM15.2998 10.1001C15.2998 12.0331 13.7328 13.6001 11.7998 13.6001C9.86681 13.6001 8.2998 12.0331 8.2998 10.1001C8.2998 8.1671 9.86681 6.6001 11.7998 6.6001C13.7328 6.6001 15.2998 8.1671 15.2998 10.1001Z" fill="#222222" />
                    </svg>

                    <p className='results__icon-name'>Profile</p>
                </div>
            </div>

        </body>
    );
}

export default Regular;



