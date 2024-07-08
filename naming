# Developer's Guide to Slug Conventions

## Overview
This guide provides a comprehensive overview of the slug naming conventions used in our IoT network platform. It outlines the structure for Projects, Applications, Agents, and Buckets, ensuring consistency and clarity across the system.

## Slug Structure

### Projects
Each project should have a unique name.

- **Slug Template:** `projects-{project_name}`
- **Example:** `projects-green-energy`

### Applications
Applications belong to a specific project and should have unique, descriptive names within that project.

- **Slug Template:** `projects-{project_name}-applications-{application_name}`
- **Example:** `projects-green-energy-applications-smart-lighting`

### Agents
Agents are data movers for each application and should have unique names within their application.

- **Slug Template:** `projects-{project_name}-applications-{application_name}-agents-{agent_name}`
- **Example:** `projects-green-energy-applications-smart-lighting-agents-data-mover-1`

### Buckets
Buckets store data for each application and can be of type `raw` or `cleaned`. Each bucket should have a unique, descriptive name within its application.

- **Slug Template:** `projects-{project_name}-applications-{application_name}-buckets-{bucket_type}-{bucket_name}`
- **Example (Raw):** `projects-green-energy-applications-smart-lighting-buckets-raw-light-sensor-data-raw`
- **Example (Cleaned):** `projects-green-energy-applications-smart-lighting-buckets-cleaned-light-sensor-data-cleaned`

## Handling Outliers

### Naming Conflicts
If a conflict arises where two entities have the same name, consider appending a unique identifier or additional descriptive term to the name.

- **Example:** If two applications within the same project are named `smart-lighting`, they can be differentiated as:
  - `projects-green-energy-applications-smart-lighting-v1`
  - `projects-green-energy-applications-smart-lighting-v2`

### Special Characters
Avoid using special characters in names. Stick to alphanumeric characters and hyphens. Replace any spaces with hyphens.

- **Invalid:** `smart lighting`
- **Valid:** `smart-lighting`

### Length Constraints
Ensure names are concise yet descriptive. Avoid excessively long names that can make slugs unwieldy.

- **Too Long:** `projects-green-energy-applications-smart-lighting-system-for-building-1`
- **Better:** `projects-green-energy-applications-smart-lighting-bldg1`

### Reserved Keywords
Do not use reserved keywords or system identifiers as names. Examples of reserved keywords include `admin`, `system`, `default`, etc.

- **Invalid:** `projects-system`
- **Valid:** `projects-green-energy`

## Examples

### Full Example
Assume you have a project named `GreenEnergy`, an application within that project named `SmartLighting`, an agent named `DataMover1`, and two types of buckets (`raw` and `cleaned`) named `LightSensorDataRaw` and `LightSensorDataCleaned`. The slugs would be:

- **Project:** `projects-green-energy`
- **Application:** `projects-green-energy-applications-smart-lighting`
- **Agent:** `projects-green-energy-applications-smart-lighting-agents-data-mover-1`
- **Raw Bucket:** `projects-green-energy-applications-smart-lighting-buckets-raw-light-sensor-data-raw`
- **Cleaned Bucket:** `projects-green-energy-applications-smart-lighting-buckets-cleaned-light-sensor-data-cleaned`

### Navigating to Resources
- **Project:** `/projects-green-energy`
- **Applications under a Project:** `/projects-green-energy-applications`
- **Specific Application:** `/projects-green-energy-applications-smart-lighting`
- **Agents under an Application:** `/projects-green-energy-applications-smart-lighting-agents`
- **Specific Agent:** `/projects-green-energy-applications-smart-lighting-agents-data-mover-1`
- **Buckets under an Application:** `/projects-green-energy-applications-smart-lighting-buckets`
- **Specific Bucket (Raw):** `/projects-green-energy-applications-smart-lighting-buckets-raw-light-sensor-data-raw`
- **Specific Bucket (Cleaned):** `/projects-green-energy-applications-smart-lighting-buckets-cleaned-light-sensor-data-cleaned`

## Conclusion
Adhering to these slug conventions ensures a consistent and easily navigable structure within our IoT network platform. If you encounter any issues or have questions about naming conventions, please refer to this guide or contact the development team for further assistance.
