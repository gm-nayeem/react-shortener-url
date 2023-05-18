import axios from "axios";
import './linkResult.scss';
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const LinkResult = ({ inputValue }) => {
    const [shortenLink, setShortenLink] = useState("");
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // getch shorten link
    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
            setShortenLink(res.data.result.full_short_link + "/?page=1212");
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (inputValue?.length) {
            fetchData();
        }
    }, [inputValue]);

    // handle copy
    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [copied]);

    if (loading) {
        return <p className="noData">Loading...</p>
    }
    if (error) {
        return <p className="noData">{`Something went wrong :(`} </p>
    }

    return (
        <>
            {shortenLink && (
                <div className="result">
                    <p>{shortenLink}</p>
                    <CopyToClipboard
                        text={shortenLink}
                        onCopy={() => setCopied(true)}
                    >
                        <button className={copied ? "copied" : ""}>Copy to Clipboard</button>
                    </CopyToClipboard>
                </div>
            )}
        </>
    )
}

export default LinkResult;