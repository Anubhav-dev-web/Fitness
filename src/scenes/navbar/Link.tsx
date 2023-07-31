import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/Shared/types";

type Props = {
  page: string; // name of the anchor link to scroll to on click.
  selectedPage: SelectedPage; // whether or not this is currently active/selected in
  setSelectedPage: (value: SelectedPage) => void; // whether or not this is currently active/
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
