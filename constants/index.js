let base_url = import.meta.env.VITE_BASE_URL;

if (import.meta.env.VITE_MODE === "dev") {
    base_url = import.meta.env.VITE_BASE_URL_LOCAL;
}

console.log("base_url", base_url);

export default base_url;
