---
title:  Import a Workspace
summary: If you are upgrading to a new version of Superalgos, you need to import a new workspace.
sidebar: suite_sidebar
permalink: suite-step-4.html
toc: false
---

The <a data-toggle="tooltip" data-original-title="{{site.data.concepts.workspace}}">workspace</a> is an important concept within Superalgos. It is the entity that holds all the information handled by the system. In practical terms, it is a file that can be backed up, shared, and restored in the system.

{% include important.html content="For your convenience, the system ships with a default workspace that is restored automatically the first time you fire up the system. If this is the first time you are running the system, the workspace has already been loaded and you do not need to restore it manually. If that is the case, skip the following instructions and go straight to the next step." %}

## If You Are Upgrading to a New Version of Superalgos

**1. Locate the file ```Workspace.json```** in the root of the ```Superalgos-master``` folder.

**2. Left-click on the file and drag it over the browser** where the system is running. You will notice the system recognizes your intent and pulls de slider up, showing the <a data-toggle="tooltip" data-original-title="{{site.data.concepts.design_space}}">design space</a>.

**3. Drop the workspace file on the design space** and wait for a few seconds. You should see a ring around the workspace icon, indicating the progress of the import action. Once the ring disappears, the import operation is over and you are free to start using the system.