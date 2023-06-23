import React from 'react'
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css";

import sts_ascensionstats from "../images/sts_ascensionstats.png"
import sts_featureimportance from "../images/sts_featureimportance.png"
import sts_rocauc from "../images/sts_rocauc.png"

import nlp_dashboard from "../images/nlp_dashboard.png"
import nlp_choropleth from "../images/nlp_choropleth.png"
import nlp_lossplot from "../images/nlp_lossplot.png"
import nlp_thumb1 from "../images/nlp_thumb1.png"
import nlp_thumb2 from "../images/nlp_thumb2.png"
import nlp_thumb3 from "../images/nlp_thumb3.png"

import yolo_livedetection from "../images/yolo_livedetection.gif"
import yolo_metrics from "../images/yolo_metrics.png"
import yolo_confmatrix from "../images/yolo_confmatrix.png"
import yolo_thumb1 from "../images/yolo_thumb1.png"
import yolo_thumb2 from "../images/yolo_thumb2.png"

import poe_items from "../images/poe_items.png"
import poe_confmatrix from "../images/poe_confmatrix.png"
import poe_model from "../images/poe_model.png"
import poe_thumb1 from "../images/poe_thumb1.png"

export default function Projects() {
    const [openSTS, setOpenSTS] = React.useState(-1);
    const [openNLP, setOpenNLP] = React.useState(-1);
    const [openYOLO, setOpenYOLO] = React.useState(-1);
    const [openPOE, setOpenPOE] = React.useState(-1);

    return (
        <div className="Projects">
            <h2>Selected Projects in Data Science and Machine Learning</h2>
            <hr />
            {/* Project 1: Slay the Spire Run Outcome Classification*/}
            <div className="Project">
                <h3>Slay the Spire Run Outcome Classification</h3>
                <p>
                    A project about the video game Slay the Spire, using large quantities of data about its many game elements to classify and predict whether a player is likely to beat the game.
                    All the game's contents, such as gold, relics, cards, enemies, classes, etc., are analyzed and utilized during modelling in various ways.
                </p>
                <p>Key Achievements:</p>
                <ul>
                    <li>Merged, cleaned, and prepared 2 million runs worth of data</li>
                    <li>Tested 3 different models with different feature configurations to evaluate modelling efficacy</li>
                    <li>Achieved model accuracy percentages of up to 98% after iterative improvements</li>
                </ul>
                <p>Images (click to enlarge):</p>
                <div className="Images">
                    <img src={sts_ascensionstats} onClick={() => setOpenSTS(0)} />
                    <img src={sts_featureimportance} onClick={() => setOpenSTS(1)} />
                    <img src={sts_rocauc} onClick={() => setOpenSTS(2)} />
                </div>
                <Lightbox 
                    open={openSTS >= 0}
                    index={openSTS}
                    close={() => setOpenSTS(-1)}
                    slides={[
                        {src: sts_ascensionstats},
                        {src: sts_featureimportance},
                        {src: sts_rocauc}
                    ]}
                    controller={{closeOnBackdropClick: true}}
                />
                <a href="https://github.com/RumiaGIT/sts-outcome-classification">View GitHub Repository</a>
            </div>
            <hr />
            {/* Project 2: NLP Hate Speech Classification */}
            <div className="Project">
                <h3>NLP Hate Speech Classification</h3>
                <p>
                    A school project, focused on employing Natural Language Processing for the classification of textual sequences as normal, offensive, or hate speech. 
                    Utilizes a custom-trained Transformer model, used to classify comments from 4Chan's /pol/ (politically incorrect) imageboard.
                </p>
                <p>Key Achievements:</p>
                <ul>
                    <li>Achieved a 97% model accuracy rate after transfer learning with custom data</li>
                    <li>Collected and classified over 450,000 4Chan comments</li>
                    <li>Displayed results in various interactive Power BI dashboards</li>
                </ul>
                <p>Images (click to enlarge):</p>
                <div className="Images">
                    <img src={nlp_thumb1} onClick={() => setOpenNLP(0)} />
                    <img src={nlp_thumb2} onClick={() => setOpenNLP(1)} />
                    <img src={nlp_thumb3} onClick={() => setOpenNLP(2)} />
                </div>
                <Lightbox
                    open={openNLP >= 0}
                    index={openNLP}
                    close={() => setOpenNLP(-1)}
                    slides={[
                        {src: nlp_dashboard},
                        {src: nlp_choropleth},
                        {src: nlp_lossplot}
                    ]}
                    controller={{closeOnBackdropClick: true}}
                />
                <a href="https://github.com/RumiaGIT/hate-speech-classification">View GitHub Repository</a>
            </div>
            <hr />
            {/* Project 3: YOLO Gesture Detection */}
            <div className="Project">
                <h3>YOLO Gesture Detection</h3>
                <p>
                    Using a PyTorch-based model known as YOLOv5 to perform object detection for several hand gestures in images. 
                    Said model is trained and tested on a custom dataset from Roboflow, as well as images of myself.  
                </p>
                <p>Key Achievements:</p>
                <ul>
                    <li>Trained a YOLOv5 model on a custom hand gesture dataset</li>
                    <li>Performed hand gesture live detection using opencv</li>
                </ul>
                <p>Images (click to enlarge):</p>
                <div className="Images">
                    <img src={yolo_thumb1} onClick={() => setOpenYOLO(0)} />
                    <img src={yolo_thumb2} onClick={() => setOpenYOLO(1)} />
                    <img src={yolo_confmatrix} onClick={() => setOpenYOLO(2)} />
                </div>
                <Lightbox
                    open={openYOLO >= 0}
                    index={openYOLO}
                    close={() => setOpenYOLO(-1)}
                    slides={[
                        {src: yolo_livedetection},
                        {src: yolo_metrics},
                        {src: yolo_confmatrix}
                    ]}
                    controller={{closeOnBackdropClick: true}}
                />
                <a href="https://github.com/RumiaGIT/yolo-gesture-detection">View GitHub Repository</a>
            </div>
            <hr />
            {/* Project 4: Path of Exile Item Image Classification */}
            <div className="Project">
                <h3>Path of Exile Item Image Classification</h3>
                <p>
                    Using a custom-written PyTorch CNN to classify items from Path of Exile.
                    The dataset used is a compilation of all items (regular and uniques) in Path of Exile, split up among their ingame base types such as Axes, Flasks, Belts, etc. 
                </p>
                <p>Key Achievements:</p>
                <ul>
                    <li>Implemented a PyTorch CNN from scratch</li>
                    <li>Achieved a 92% model accuracy rate after iterative improvements</li>
                    <li>Made predictions across 20 total classes</li>
                </ul>
                <p>Images (click to enlarge):</p>
                <div className="Images">
                    <img src={poe_thumb1} onClick={() => setOpenPOE(0)} />
                    <img src={poe_confmatrix} onClick={() => setOpenPOE(1)} />
                    <img src={poe_model} onClick={() => setOpenPOE(2)} />
                </div>
                <Lightbox 
                    open={openPOE >= 0}
                    index={openPOE}
                    close={() => setOpenPOE(-1)}
                    slides={[
                        {src: poe_items},
                        {src: poe_confmatrix},
                        {src: poe_model}
                    ]}
                    controller={{closeOnBackdropClick: true}}
                />
                <a href="https://github.com/RumiaGIT/poe-image-classification">View GitHub Repository</a>
            </div> 
        </div>
    )
}