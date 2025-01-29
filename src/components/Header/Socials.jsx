import './Socials.css'
import githubLogo from '/src/assets/icons/github.svg'
import linkedinLogo from '/src/assets/icons/linkedin.svg'
import emailLogo from '/src/assets/icons/email.svg'
import leetcodeLogo from '/src/assets/icons/leetcode.svg'
import twitterLogo from '/src/assets/icons/twitter.svg'

function Socials(props) {

    let soclogo = ""

    switch(props.entry.name) {
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
        <a href={props.entry.url} target="_blank"><img className="socials-logo" src={soclogo} alt={props.entry.alt}/></a>
        
    )
}

export default Socials