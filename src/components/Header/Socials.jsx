import './Socials.css'
import githubLogo from '/src/assets/github-mark.svg'
import linkedinLogo from '/src/assets/linkedin.svg'
import emailLogo from '/src/assets/email.svg'
import leetcodeLogo from '/src/assets/leetcode.svg'
import twitterLogo from '/src/assets/twitter.svg'


function Socials(props) {

    let soclogo = ""

    switch(props.name) {
        case "github":
            soclogo = githubLogo
            break;
        case "linkedin":
            soclogo = linkedinLogo
            break;
        case "email":
            soclogo = emailLogo
            break;
        case "twitter":
            soclogo = twitterLogo
            break;
        case "leetcode":
            soclogo = leetcodeLogo
            break;
        default:
            soclogo = githubLogo // no logo
    }

    return (
        <a href={props.url} target="_blank"><img className="socials-logo" src={soclogo} alt={props.alt}/></a>
        
    )
}

export default Socials