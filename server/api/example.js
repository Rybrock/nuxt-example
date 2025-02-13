export default defineEventHandler(async (event) => {
    try {
        const response = await $fetch(`https://api.rawg.io/api/games?key=${apiKey}`);
        
        if (!response) {
            throw new Error("No data received from API");
        }

        return response;
    } catch (error) {
        console.error("Error fetching data:", error);
        return { error: "Failed to fetch data" };
    }
});
