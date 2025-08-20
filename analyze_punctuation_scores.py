#!/usr/bin/env python3
"""
Script to analyze punctuation scoring data from index.html
Extracts total possible scores and question counts for each punctuation mark
"""

import re
import json
from collections import defaultdict

def extract_scores_from_html(filename):
    """Extract scoring data from HTML file"""
    punctuation_totals = defaultdict(int)
    punctuation_counts = defaultdict(int)
    
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Find the allQuizQuestions array declaration
        pattern = r'const allQuizQuestions = (\[[\s\S]*?\]);'
        match = re.search(pattern, content)
        
        if not match:
            print("Error: Could not find allQuizQuestions array in HTML file")
            return None, None
            
        quiz_data_str = match.group(1)
        
        # Convert JavaScript object syntax to JSON
        # Replace unquoted keys with quoted keys
        quiz_data_str = re.sub(r'(\w+):', r'"\1":', quiz_data_str)
        
        # Parse as JSON
        try:
            quiz_data = json.loads(quiz_data_str)
        except json.JSONDecodeError as e:
            print(f"Error parsing quiz data as JSON: {e}")
            print("Trying alternative parsing method...")
            
            # Fallback: use eval for JavaScript object syntax
            try:
                # Replace JavaScript object syntax elements that aren't valid Python
                js_data = quiz_data_str.replace('true', 'True').replace('false', 'False').replace('null', 'None')
                quiz_data = eval(js_data)
            except Exception as e2:
                print(f"Error parsing with eval: {e2}")
                return None, None
        
        print(f"Found {len(quiz_data)} questions with scoring data")
        
        answer_count = 0
        for question in quiz_data:
            if 'answers' in question:
                for answer in question['answers']:
                    if 'scores' in answer:
                        answer_count += 1
                        scores = answer['scores']
                        
                        # Add to totals and counts
                        for punct, score in scores.items():
                            punctuation_totals[punct] += score
                            punctuation_counts[punct] += 1
        
        print(f"Processed {answer_count} answer options with scoring data")
                    
    except FileNotFoundError:
        print(f"Error: Could not find file '{filename}'")
        return None, None
    except Exception as e:
        print(f"Unexpected error: {e}")
        return None, None
        
    return punctuation_totals, punctuation_counts

def analyze_punctuation_balance(totals, counts):
    """Analyze balance and representation of punctuation marks"""
    print("\n" + "="*80)
    print("PUNCTUATION SCORING ANALYSIS")
    print("="*80)
    
    # Sort by total possible score (descending)
    sorted_by_total = sorted(totals.items(), key=lambda x: x[1], reverse=True)
    
    print(f"\n{'Punctuation':<12} {'Total Score':<12} {'Questions':<12} {'Avg Score':<12}")
    print("-" * 52)
    
    for punct, total_score in sorted_by_total:
        question_count = counts[punct]
        avg_score = total_score / question_count if question_count > 0 else 0
        print(f"{punct:<12} {total_score:<12} {question_count:<12} {avg_score:<12.2f}")
    
    # Summary statistics
    total_questions_analyzed = len([punct for punct, count in counts.items() if count > 0])
    max_possible = max(totals.values()) if totals else 0
    min_possible = min(totals.values()) if totals else 0
    avg_possible = sum(totals.values()) / len(totals) if totals else 0
    
    print(f"\n{'SUMMARY STATISTICS'}")
    print("-" * 30)
    print(f"Punctuation marks analyzed: {total_questions_analyzed}")
    print(f"Highest total possible score: {max_possible}")
    print(f"Lowest total possible score: {min_possible}")  
    print(f"Average total possible score: {avg_possible:.2f}")
    
    # Find marks with low representation
    print(f"\n{'LOW REPRESENTATION (≤5 questions):'}")
    print("-" * 40)
    low_rep = [(punct, count) for punct, count in counts.items() if count <= 5]
    for punct, count in sorted(low_rep, key=lambda x: x[1]):
        print(f"{punct}: {count} questions")
    
    # Find marks with high representation  
    print(f"\n{'HIGH REPRESENTATION (≥15 questions):'}")
    print("-" * 40)
    high_rep = [(punct, count) for punct, count in counts.items() if count >= 15]
    for punct, count in sorted(high_rep, key=lambda x: x[1], reverse=True):
        print(f"{punct}: {count} questions")

def main():
    filename = "index.html"
    
    print("Analyzing punctuation scoring data from index.html...")
    totals, counts = extract_scores_from_html(filename)
    
    if totals is not None and counts is not None:
        analyze_punctuation_balance(totals, counts)
        
        # Export data to CSV for further analysis
        try:
            import csv
            with open("punctuation_analysis.csv", "w", newline='') as f:
                writer = csv.writer(f)
                writer.writerow(["Punctuation", "Total_Score", "Question_Count", "Average_Score"])
                for punct in sorted(totals.keys()):
                    total = totals[punct] 
                    count = counts[punct]
                    avg = total / count if count > 0 else 0
                    writer.writerow([punct, total, count, f"{avg:.2f}"])
            print(f"\nData exported to punctuation_analysis.csv")
        except Exception as e:
            print(f"Error writing CSV: {e}")
    else:
        print("Failed to extract scoring data.")

if __name__ == "__main__":
    main()