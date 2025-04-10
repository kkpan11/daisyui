import yaml from "js-yaml"

export async function load() {
  try {
    const response = await fetch("https://api.daisyui.com/data/frameworks.yaml")

    if (!response.ok) {
      throw new Error(`Failed to fetch frameworks: ${response.status}`)
    }

    const yamlFile = await response.text()
    const frameworks = yaml.load(yamlFile)

    return {
      frameworks,
    }
  } catch (error) {
    console.error("Error loading frameworks:", error)
    return {
      frameworks: [],
    }
  }
}
