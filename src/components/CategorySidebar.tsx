import React from 'react';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { ScrollArea } from './ui/scroll-area';

interface CategorySidebarProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
}

export function CategorySidebar({ categories, selectedCategories, onCategoryChange }: CategorySidebarProps) {
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
    <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-gray-900 dark:text-white">Categories</h3>
          <div className="flex space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={selectAll}
              className="text-xs px-2 py-1 h-6"
            >
              All
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearAll}
              className="text-xs px-2 py-1 h-6"
            >
              Clear
            </Button>
          </div>
        </div>
        {selectedCategories.length > 0 && (
          <div className="text-xs text-blue-600 dark:text-blue-400">
            {selectedCategories.length} selected
          </div>
        )}
      </div>

      {/* Categories List */}
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-3">
              <Checkbox
                id={`sidebar-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
                className="flex-shrink-0"
              />
              <label 
                htmlFor={`sidebar-${category}`} 
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex-1 text-gray-700 dark:text-gray-300"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}