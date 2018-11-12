# testing-upgrade

This repo shows how your consumer can update your angular lib (and anular itself) using `ng update` command

It contains both consumer app and library. Library is published on npm for simplicity [here](https://www.npmjs.com/package/@itsv/the-one-to-update). 

Output from update (this change also committed and can be seen here):
```powershell
~\dev\testing-upgrade\the-consumer>ng update @itsv/the-one-to-update
    Updating package.json with dependency @angular/core @ "7.0.3" (was "6.1.10")...
    Updating package.json with dependency @itsv/the-one-to-update @ "7.0.0-beta.8" (was "6.0.0-alpha.14")...
UPDATE package.json (365 bytes)
npm WARN the-consumer@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

added 149 packages from 119 contributors and audited 2135 packages in 87.118s
found 0 vulnerabilities

            Running update schematic ...
            With options:
UPDATE index.ts (25 bytes)
```

As it can be seen - we're running only `ng update @itsv/the-one-to-update` of a specific lib and angular gets updated. This may give your lib an ability to dictate angular version.
