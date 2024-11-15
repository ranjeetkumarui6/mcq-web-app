import React, { useContext, useState } from "react";
import styles from "./index.module.css";
import { contextStore } from "../Context/Store";
const Mcqcomp = ({ question, a, b, c, d, no, ans}) => {
  
  const [a1,a2,a3,a4,seta1,seta2,seta3,seta4]=useContext(contextStore)
  return (
    <>
      <div className={styles.msqcomponents}>
        <div className={styles.question}>
          <span>{no}.</span>
          <span>{question}</span>
        </div>
        <div className={styles.answer}>
          {ans === a && a1 == true ? 
            <div className={styles.inputcontainer}>
              <input
                type="radio"
                onChange={(e) => seta1(e.target.checked)}
                name={no}
                value={ans}
                checked={a1}

              />
              (A) <p style={{ color: "green" }}>{a}</p>
            </div>
           : 
           ans !== a && a1 == true 
           ?
            <div className={styles.inputcontainer}>
              <input
                type="radio"
                onChange={(e) => seta1(e.target.checked)}
                checked={a1}
                name={no}
                value={ans}
              />
              (A) <p style={{ color: "red" }}>{a}</p>
            </div>
          :
          <div className={styles.inputcontainer}>
              <input
                type="radio"
                onChange={(e) => seta1(e.target.checked)}
                checked={a1}
                name={no}
                value={ans}
              />
              (A) <p >{a}</p>
            </div>
          }
          {ans === b && a2 == true ? (
            <div className={styles.inputcontainer}>
              <input
                type="radio"
                onChange={(e) => seta2(e.target.checked)}
                checked={a2}
                name={no}
                value={ans}
              />
              (B) <p style={{ color: "green" }}>{b}</p>
            </div>
          ) : ans !== b && a2 == true ?(
            <div className={styles.inputcontainer}>
              <input
                type="radio"
                onChange={(e) => seta2(e.target.checked)}
                checked={a2}
                name={no}
                value={ans}
              />
              (B) <p style={{ color: "red" }}>{b}</p>
            </div>
          ):
          <div className={styles.inputcontainer}>
              <input
                type="radio"
                onChange={(e) => seta2(e.target.checked)}
                checked={a2}
                name={no}
                value={ans}
              />
              (B) <p >{b}</p>
            </div>
          }
          {ans === c && a3 == true ? (
            <div className={styles.inputcontainer}>
              <input
                type="radio"
                onChange={(e) => seta3(e.target.checked)}
                checked={a3}
                name={no}
                value={ans}
              />
              (C) <p style={{ color: "green" }}>{c}</p>
            </div>
          ) : ans !== c && a3 == true ?  (
            <div className={styles.inputcontainer}>
              <input
                type="radio"
                onChange={(e) => seta3(e.target.checked)}
                checked={a3}
                name={no}
                value={ans}
              />
              (C) <p style={{ color: "red" }}>{c}</p>
            </div>
          )
        :
        <div className={styles.inputcontainer}>
              <input
                type="radio"
                onChange={(e) => seta3(e.target.checked)}
                checked={a3}
                name={no}
                value={ans}
              />
              (C) <p >{c}</p>
            </div>
        }
          {ans === d && a4 == true ? (
            <div className={styles.inputcontainer}>
              <input
                type="radio"
                onChange={(e) => seta4(e.target.checked)}
                checked={a4}
                name={no}
                value={ans}
              />
              (D) <p style={{ color: "green" }}>{d}</p>
            </div>
          ) : 
          ans !== d && a4 == true ? 
          (
            <div className={styles.inputcontainer}>
              <input
                type="radio"
                onChange={(e) => seta4(e.target.checked)}
                checked={a4}
                name={no}
                value={ans}
              />
              (D) <p style={{ color: "red" }}>{d}</p>
            </div>
          )
        :
        <div className={styles.inputcontainer}>
        <input
          type="radio"
          onChange={(e) => seta4(e.target.checked)}
          checked={a4}
          name={no}
          value={ans}
        />
        (D) <p>{d}</p>
      </div>
        }
        </div>
      </div>
    </>
  );
};

export default Mcqcomp;
