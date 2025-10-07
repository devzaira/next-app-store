import React from 'react';
import { Check, ChevronDown, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface CategoryDropdownProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
}

export function CategoryDropdown({ categories, selectedCategories, onCategoryChange }: CategoryDropdownProps) {
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      onCategoryChange(selectedCategories.filter(c => c !== category));
    } else {
      onCategoryChange([...selectedCategories, category]);
    }
  };

  const clearCategories = () => {
    onCategoryChange([]);
  };

  const selectAllCategories = () => {
    onCategoryChange([...categories]);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={`category-btn-mobile sm:w-auto bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 ${
            selectedCategories.length > 0 
              ? 'ring-2 ring-blue-500 ring-opacity-50 border-blue-300 dark:border-blue-500' 
              : ''
          }`}
          size="sm"
        >
          <Filter className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 dark:text-gray-400" />
          <span className="hidden sm:inline ml-2">
            Categories
            {selectedCategories.length > 0 && (
              <span className="ml-1 text-blue-600 dark:text-blue-400">
                ({selectedCategories.length})
              </span>
            )}
          </span>
          <ChevronDown className="hidden sm:block w-3 h-3 ml-1 text-gray-500" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg"
      >
        {/* Header with action buttons */}
        <div className="flex items-center justify-between p-2 border-b border-gray-200 dark:border-gray-700">
          <span className="text-sm font-medium text-gray-900 dark:text-white">Categories</span>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={selectAllCategories}
              className="h-6 px-2 text-xs text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-900/20"
            >
              All
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearCategories}
              className="h-6 px-2 text-xs text-gray-600 hover:text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-700"
            >
              Clear
            </Button>
          </div>
        </div>
        
        {/* Category list */}
        <div className="max-h-64 overflow-y-auto">
          {categories.map((category) => (
            <DropdownMenuItem
              key={category}
              className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-700"
              onClick={() => toggleCategory(category)}
            >
              <div className="flex items-center justify-center w-4 h-4 border border-gray-300 dark:border-gray-600 rounded">
                {selectedCategories.includes(category) && (
                  <Check className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                )}
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">
                {category}
              </span>
            </DropdownMenuItem>
          ))}
        </div>
        
        {/* Footer with selected count */}
        {selectedCategories.length > 0 && (
          <div className="p-2 border-t border-gray-200 dark:border-gray-700">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {selectedCategories.length} of {categories.length} selected
            </span>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}