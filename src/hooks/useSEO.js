import { useEffect } from "react";

// Custom hook for managing SEO meta tags
export const useSEO = ({ title, description, keywords }) => {
  useEffect(() => {
    // Update page title
    if (title) {
      document.title = title;
    }

    // Update meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      }
    }

    // Update meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", keywords);
      }
    }
  }, [title, description, keywords]);
};

// Helper function to update Open Graph meta tags
export const updateOGTags = ({ title, description, image, url }) => {
  const updateTag = (property, content) => {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (tag && content) {
      tag.setAttribute("content", content);
    }
  };

  updateTag("og:title", title);
  updateTag("og:description", description);
  updateTag("og:image", image);
  updateTag("og:url", url);
};
