# Edrevel

### Getting Started

1. Clone the repository:

```bash
git clone git@github.com:KidusTadesseCode/edrevel.git
```

2. Navigate into the project directory:

```bash
cd project
```

3. Install dependencies and start the development server:

```bash
npm install
npm start
```

This will launch the project on your local server, and you can begin using the components as described below.

# Angular Component Documentation

## Table of Contents

1. [CellComponent](#cellcomponent)
2. [BarGraphComponent](#bargraphcomponent)
3. [ComponentOneComponent](#componentonecomponent)
4. [GraphsComponent](#graphscomponent)
5. [LineGraphComponent](#linegraphcomponent)
6. [MasterComponent](#mastercomponent)

---

## 1. **CellComponent**

### Description

The `CellComponent` is responsible for rendering dynamic data in a grid layout. It adjusts the number of columns per row based on the screen size (responsive behavior). It takes inputs for course details and customizes background and text colors.

### Inputs

- `course: string`: The name of the course.
- `courseContent: any`: The content to display related to the course. It could be a string, an array, or an object.
- `color: string`: Text color. Default is `#000000`.
- `bgColor: string`: Background color. Default is `#ffffff`.

### Methods

- **isArray()**: Checks if the input is an array.
- **isDictionary()**: Checks if the input is an object (but not an array).
- **isString()**: Checks if the input is a string.
- **getItemGroups(arr: any[], chunkSize: number)**: Splits the array into groups of `chunkSize`.
- **setItemsPerRow()**: Sets the number of items per row based on the window width.

### Usage Example

```html
<app-cell [course]="'Mathematics'" [courseContent]="courseData" [color]="'#ffffff'" [bgColor]="'#333B4B'" />
```

---

## 2. **BarGraphComponent**

### Description

The `BarGraphComponent` renders a bar chart using `ng2-charts`. It takes `barChartData` and displays it using the bar chart format. The chart is customizable with titles and labels.

### Inputs

- `barChartData: object`: Contains labels and datasets for the bar chart.
- `chartType: ChartType`: The type of chart, set to `bar`.
- `graphTitle: string`: The title of the chart.

### Example Data Structure

```typescript
public barChartData = {
  labels: ['Assignment', 'Quiz', 'Presentation', 'Lab', 'Viva'],
  datasets: [
    {
      label: 'Completed',
      data: [26, 90, 57, 60, 0],
      backgroundColor: '#8AA54A',
    },
    {
      label: 'Pending',
      data: [100, 100, 0],
      backgroundColor: '#D3D3D3',
    },
  ],
};
```

### Usage Example

```html
<app-bar-graph />
```

---

## 3. **ComponentOneComponent**

### Description

`ComponentOneComponent` fetches data from a JSON file and parses it into a structured format. It uses the `CellComponent` to render different pieces of information about courses.

### Methods

- **fetchData()**: Fetches course data from `componentOneData.json` and parses it.
- **parseCourseType(courseType: string)**: Parses and formats course type strings.
- **parseCourseContent(courseContent: any)**: Recursively parses the course content, handling strings, arrays, and objects.

### Usage Example

```html
<app-component-one />
```

---

## 4. **GraphsComponent**

### Description

The `GraphsComponent` is a reusable chart component that takes input for chart data and renders it using `ng2-charts`. It supports dynamic chart updates through Angular's `OnChanges` lifecycle hook.

### Inputs

- `graphTitle: string`: The title of the graph.
- `graphType: ChartType`: The type of chart, e.g., `bar`, `line`.
- `graphData: object`: The data used to render the chart, including labels and datasets.

### Example Data Structure

```typescript
public graphData: GraphData = {
  labels: ['Label1', 'Label2'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [10, 20],
      backgroundColor: '#8AA54A',
    },
  ],
};
```

### Usage Example

```html
<app-graphs [graphTitle]="'My Graph'" [graphType]="'line'" [graphData]="lineChartData" />
```

---

## 5. **LineGraphComponent**

### Description

The `LineGraphComponent` fetches data from a JSON file and displays it using a line chart. The data includes dynamically generated properties for styling the points and lines in the chart.

### Methods

- **fetchData()**: Fetches chart data from `componentThreeData.json` and appends additional properties like `borderColor`, `backgroundColor`, etc.

### Usage Example

```html
<app-line-graph />
```

---

## 6. **MasterComponent**

### Description

The `MasterComponent` is a container component that imports and displays other components such as `ComponentOneComponent`, `BarGraphComponent`, and `LineGraphComponent`.

### Usage Example

```html
<app-master />
```

---

## Installation & Setup

### Prerequisites

- Angular 18.
- `ng2-charts` for chart rendering.
- Ensure you have `HttpClientModule` imported in your main module for HTTP requests.

### Usage

1. Add the components to your Angular project.
2. Import necessary modules and components as required.
3. Bind input data (where necessary) to customize the behavior of the components.
