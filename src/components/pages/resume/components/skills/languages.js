import React from "react";
import languages from "../../admin/languages.json";
import LanguageItem from "./languageItem";

export default function Languages () {
    return (
        <>
            {
                languages.map((l, i)=> (
                    <LanguageItem 
                        key={"key-"+i}
                        language={l.language}
                        rate={l.rate}
                        description={l.description}
                    />
                ))
            }
        </>
    );
}