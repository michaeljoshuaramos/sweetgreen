type FilterOptionsProps = {
  category: "Bowls" | "Protein Plates" | "Salads";
  setCategory: React.Dispatch<
    React.SetStateAction<"Bowls" | "Protein Plates" | "Salads">
  >;
};

const filters: ("Bowls" | "Protein Plates" | "Salads")[] = [
  "Bowls",
  "Protein Plates",
  "Salads",
];

const FilterOptions = ({ category, setCategory }: FilterOptionsProps) => {
  return (
    <div className="flex space-x-4">
      {filters.map((filter, index) => {
        const isActive = category === filter;

        return (
          <button
            key={index}
            onClick={() => setCategory(filter)}
            className={`px-4 py-2 bg-sweetgreen-green-tertiary text-sweetgreen-green-primary text-sm font-medium rounded-full 
                ${isActive && "bg-sweetgreen-green-primary text-white"}
                ${
                  !isActive && "hover:bg-sweetgreen-green-secondary transition"
                }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};

export default FilterOptions;
