import { useState } from "react";

const emptyForm = {
  title: "", category: "Dinner", time: "20", servings: "2",
  difficulty: "Easy", image: "", description: "", ingredients: "", instructions: ""
};

export default function RecipeForm({ onSubmit }) {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const ingredients = form.ingredients.split("\n").map((item) => item.trim()).filter(Boolean);
    const instructions = form.instructions.split("\n").map((item) => item.trim()).filter(Boolean);
    if (!form.title.trim() || !form.description.trim() || ingredients.length === 0 || instructions.length === 0) {
      setError("Please add a title, description, ingredients, and instructions.");
      return;
    }
    setError("");
    onSubmit({
      ...form,
      title: form.title.trim(),
      time: Math.max(1, Number(form.time) || 1),
      servings: Math.max(1, Number(form.servings) || 1),
      ingredients,
      instructions,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p role="alert">{error}</p>}
      <label>
        Title
        <input name="title" value={form.title} onChange={update} />
      </label>
      <label>
        Category
        <select name="category" value={form.category} onChange={update}>
          <option>Dinner</option>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dessert</option>
          <option>Snack</option>
        </select>
      </label>
      <label>
        Time (minutes)
        <input name="time" type="number" min="1" value={form.time} onChange={update} />
      </label>
      <label>
        Servings
        <input name="servings" type="number" min="1" value={form.servings} onChange={update} />
      </label>
      <label>
        Difficulty
        <select name="difficulty" value={form.difficulty} onChange={update}>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </label>
      <label>
        Image URL
        <input name="image" value={form.image} onChange={update} />
      </label>
      <label>
        Description
        <textarea name="description" value={form.description} onChange={update} />
      </label>
      <label>
        Ingredients (one per line)
        <textarea name="ingredients" value={form.ingredients} onChange={update} />
      </label>
      <label>
        Instructions (one per line)
        <textarea name="instructions" value={form.instructions} onChange={update} />
      </label>
      <button type="submit">Save recipe</button>
    </form>
  );
}