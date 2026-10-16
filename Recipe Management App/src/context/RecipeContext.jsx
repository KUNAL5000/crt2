import function RecipeProvider({ children}) {
    const [recipes, setRecipes] = useState([]);
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : starterRecipes;
    } catch {
        return starterRecipes;
    }