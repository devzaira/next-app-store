import React from 'react';
import { Filter } from 'lucide-react';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

interface CategoryFilterProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
}

export function CategoryFilter({ categories, selectedCategories, onCategoryChange }: CategoryFilterProps) {
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      onCategoryChange(selectedCategories.filter(c => c !== category));
    } else {
      onCategoryChange([...selectedCategories, category]);
    }
  };

  const selectAll = () => {
    onCategoryChange(categories);
  };

  const clearAll = () => {
    onCategoryChange([]);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="category-filter bg-gradient-to-r from-blue-50 to-cyan-50 dark:bg-gray-700 border-blue-200 dark:border-gray-600 rounded-lg px-3 md:px-4 py-2 hover:from-blue-100 hover:to-cyan-100 transition-all text-sm md:text-base">
          <Filter className="w-4 h-4 mr-2 text-blue-600" />
          Categories
          {selectedCategories.length > 0 && (
            <span className="ml-2 px-2 py-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs rounded-full shadow-sm">
              {selectedCategories.length}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64" align="start">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="font-medium">Categories</h4>
            <div className="space-x-2">
              <Button variant="ghost" size="sm" onClick={selectAll}>
                All
              </Button>
              <Button variant="ghost" size="sm" onClick={clearAll}>
                Clear
              </Button>
            </div>
          </div>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => toggleCategory(category)}
                />
                <label 
                  htmlFor={category} 
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}