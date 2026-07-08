// ============================================================
// components/CodeEditor.jsx — Monaco Code Editor Wrapper
// Wraps the @monaco-editor/react package with DebugX theme.
// ============================================================

import Editor from "@monaco-editor/react";

// Map our language values to Monaco's recognized language IDs
const MONACO_LANGUAGE_MAP = {
  c:          "c",
  cpp:        "cpp",
  java:       "java",
  python:     "python",
  javascript: "javascript",
};

// Default starter code shown for each language
export const DEFAULT_CODE = {
  c: `#include <stdio.h>

int main() {
    // Write your C code here
    int arr[] = {5, 2, 8, 1, 9};
    int n = 5;
    
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    
    printf("Sorted array: ");
    for (int i = 0; i <= n; i++) {  // Bug: should be i < n
        printf("%d ", arr[i]);
    }
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
using namespace std;

int fibonacci(int n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    int n = 10;
    cout << "Fibonacci sequence: ";
    for (int i = 0; i <= n; i++) {
        cout << fibonacci(i) << " ";
    }
    cout << endl;
    return 0;
}`,
  java: `public class Main {
    public static int[] bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        arr = bubbleSort(arr);
        System.out.print("Sorted: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}`,
  python: `def find_duplicates(nums):
    seen = []
    duplicates = []
    
    for num in nums:
        if num in seen:
            duplicates.append(num)
        seen.append(num)
    
    return duplicates

numbers = [1, 2, 3, 4, 2, 5, 3, 6]
result = find_duplicates(numbers)
print("Duplicates found:", result)`,
  javascript: `function reverseString(str) {
  let reversed = "";
  for (let i = str.length; i >= 0; i--) {  // Bug: should be i > 0 or start at length-1
    reversed += str[i];
  }
  return reversed;
}

const result = reverseString("Hello, World!");
console.log(result);`,
};

/**
 * CodeEditor
 *
 * Props:
 *   code     {string}   - Current code value
 *   language {string}   - Selected language key (e.g., "python")
 *   onChange {Function} - Called with new code string on edit
 */
function CodeEditor({ code, language, onChange }) {
  const monacoLang = MONACO_LANGUAGE_MAP[language] || "javascript";

  return (
    <div className="flex flex-col gap-2">
      {/* ── Label ─────────────────────────────────────── */}
      <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
        <span>📝</span>
        <span>Code Editor</span>
        <span className="ml-auto text-xs text-gray-500 font-normal">
          Monaco Editor · VS Code Experience
        </span>
      </label>

      {/* ── Monaco Editor ─────────────────────────────── */}
      <div className="monaco-wrapper">
        <Editor
          height="380px"
          language={monacoLang}
          value={code}
          onChange={(val) => onChange(val || "")}
          theme="vs-dark"                          // VS Code dark theme
          options={{
            fontSize: 14,
            fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
            fontLigatures: true,
            minimap: { enabled: false },           // Hide minimap for clean UI
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,                 // Resize with container
            padding: { top: 16, bottom: 16 },
            smoothScrolling: true,
            cursorBlinking: "smooth",
            cursorSmoothCaretAnimation: "on",
            renderLineHighlight: "line",
            bracketPairColorization: { enabled: true },
            suggest: { preview: true },
            wordWrap: "on",
          }}
          loading={
            // Shown while Monaco JS loads
            <div className="flex items-center justify-center h-[380px] bg-[#1e1e1e]">
              <div className="flex gap-2">
                <div className="loading-dot" />
                <div className="loading-dot" />
                <div className="loading-dot" />
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default CodeEditor;
