import React from "react";
import "./Blog.css";

function Blog() {
    return (
        <div className="row">
            <div className="leftcolumn">
                <div className="card">
                    <h1 className="mt-2">
                        India is the Second-Fastest-Growing freelance market in
                        the world, Says report
                    </h1>
                    <div className="img1" style={{ height: 600 }}>
                        <img
                            src="https://www.rebliss.in/blogpic/freelancer.png"
                            className="imgg"
                            alt=""
                        />
                    </div>

                    <h1 className="text-xl">
                        रिब्लिस एक ऐसे संगठन है, जो कही भी, किसी भी समय काम करने
                        और कमाने के अवसर प्रदान कर रहा है,यह एक भरोसेमंद और
                        पारदर्शी कंपनी है। हजारों लोग रिब्लिस के साथ काम कर रहे
                        हैं और अपनी आवश्यकता, कौशल और प्रयास के अनुसार कमाई कर
                        रहे हैं। जितनी मेहनत उतनी कमाई यह आसान है, Google Play
                        Store से रिब्लिस ऐप डाउनलोड करके और अपने मोबाइल पर काम
                        शुरु करने के लिए खुद को पंजीकृत करके रिब्लिस साथी बनें।
                        ऐप डाउनलोड करे, रजिस्टर करे, और अपना काम चालू करे।
                        पारदर्शी होना रिब्लिस की एक महत्वपूर्ण नीति है, यह
                        दर्शाता है कि आप अपने प्रत्येक कार्य से कितना कमा सकते
                        हैं और आपके द्वारा किये गए सभी सफल कायों का भुगतान आपको
                        समय पर मिलता है। आपका काम, आपकी कमाई, बिना किसी
                        कन्फ्यूजन के, आपके खाते में। रिब्लिस मे विभिन्न प्रकार
                        के कार्य होंगे जो आप रिब्लिस ऐप पर देख सकते हैं और
                        समय-समय पर नए कार्य को देख सकते है। काम की जानकारी
                        रिब्लिस ऐप पर देखे, और अपने पसंद का काम चुने. रिब्लिस
                        केयर सभी सक्रिय रिब्लिस साथियों को बीमा प्रदान करता है,
                        बीमा की राशी आपकी आय से काट ली जाएगी। आपकी सुरक्षा का भी
                        ख्याल रिब्लिस करता है। तो तैयार हो जाये… कभी भी – कही भी
                        काम करें और जितना चाहें उतना कमाएं। रिब्लिस के साथ,
                        जितनी मेहनत उतनी ही कमाई।
                    </h1>
                </div>
                <div className="card">
                    <div className="fakeimg" style={{ height: 600 }}>
                        <img
                            src="https://www.rebliss.in/blogpic/freelancer.png"
                            className="imgg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="rightcolumn">
                <div className="card">
                    <h2>About Me</h2>
                    <div className="fakeimg" style={{ height: 100 }}>
                        Image2
                    </div>
                    <p>
                        Some text about me in culpa qui officia deserunt mollit
                        anim..
                    </p>
                </div>
                <div className="card">
                    <h3>Popular Post</h3>
                    <div className="fakeimg">Image</div>
                    <br />
                    <div className="fakeimg">Image</div>
                    <br />
                    <div className="fakeimg">Image</div>
                </div>
                <div className="card">
                    <h3>Follow Me</h3>
                    <p>Some text..</p>
                </div>
            </div>
        </div>
    );
}

export default Blog;
