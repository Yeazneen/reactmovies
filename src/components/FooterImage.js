export default function FooterImage(props){
    return(
        <div className="FooterImage">
            <img 
                src={`https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png`}
                alt={props.alt}
            />
        </div>
    )
}