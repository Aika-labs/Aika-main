"""
Aika-main Infrastructure
========================
Infrastructure as Code for the Aika-main website (humano.agentic).

Stack:
- Frontend: Vercel (static HTML site)
- Repository: Aika-labs/Aika-main on GitHub
"""

import pulumi
from pulumi import Config, Output
import pulumiverse_vercel as vercel

# Configuration
config = Config()
environment = config.get("environment") or "dev"
project_name = config.get("project_name") or "aika-main"

# GitHub repository configuration
github_config = Config("github")
github_repo = github_config.get("repo") or "Aika-labs/Aika-main"

# =============================================================================
# Vercel Project for Static HTML Site
# =============================================================================

frontend_project = vercel.Project(
    "aika-main-site",
    name=f"{project_name}-{environment}",
    # No framework since this is a plain static HTML site.
    framework=None,
    git_repository={
        "type": "github",
        "repo": github_repo,
    },
    # No build step needed for a static HTML site.
    build_command="",
    output_directory=".",
    automatically_expose_system_environment_variables=True,
)

# =============================================================================
# Outputs
# =============================================================================

pulumi.export("environment", environment)
pulumi.export("project_name", project_name)
pulumi.export("vercel_project_id", frontend_project.id)
pulumi.export("vercel_project_name", frontend_project.name)

# Construct the Vercel URL.
pulumi.export(
    "frontend_url",
    Output.concat("https://", frontend_project.name, ".vercel.app"),
)
