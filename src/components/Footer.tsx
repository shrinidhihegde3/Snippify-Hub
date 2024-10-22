import ContributorsSlider from "./Slider";

const Footer = () => {
    return <div className="flex flex-col h-auto shadow-[inset_0px_-2px_60px_rgba(0,0,0,0.6)]">
        <p className="self-center">Made with ❤️ by<span className="italic"> Our Contributors</span></p>
        <ContributorsSlider></ContributorsSlider>
    </div>
}

export default Footer;